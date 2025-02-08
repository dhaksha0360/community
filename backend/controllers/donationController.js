const Donation = require('../modules/Donation');
const multer = require('multer');

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure the uploads folder exists, if not create it
    const uploadDir = 'backend/uploads/';
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Ensure the filename is unique by appending the timestamp
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Controller method to handle donations
exports.createDonation = [
  upload.single('receipt'),  // Multer middleware for handling file upload
  async (req, res) => {
    try {
      // Extract form data
      const { name, email, phone, amount } = req.body;

      // Get the file path from multer if the file exists
      const receipt = req.file ? req.file.path : null;

      // Save donation details to the database
      const newDonation = new Donation({
        name,
        email,
        phone,
        amount,
        receipt,
      });

      // Save the donation and respond
      await newDonation.save();
      res.status(201).json({
        message: 'Donation saved successfully!',
        donation: newDonation,
      });
    } catch (error) {
      console.error('Error saving donation:', error);
      res.status(500).json({
        message: 'There was an error submitting your donation.',
        error: error.message,
      });
    }
  },
];