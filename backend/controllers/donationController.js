const Donation = require('../modules/Donation');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads folder exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

// Controller method to handle donations
exports.createDonation = [
  upload.single('receipt'),
  async (req, res) => {
    try {
      const { name, email, phone, amount } = req.body;
      const receipt = req.file ? `/uploads/${req.file.filename}` : null;

      const newDonation = new Donation({
        name,
        email,
        phone,
        amount,
        receipt,
      });

      await newDonation.save();
      res.status(201).json({
        message: 'Donation submitted successfully!',
        donation: newDonation,
      });
    } catch (error) {
      console.error('Error submitting donation:', error);
      res.status(500).json({
        message: 'There was an error submitting your donation.',
        error: error.message,
      });
    }
  },
];