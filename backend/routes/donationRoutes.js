const express = require('express');
const multer = require('multer');
const path = require('path');
const { createDonation } = require('../controllers/donationController');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');  // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Save file with timestamp
  },
});
const upload = multer({ storage });

// Donation route with file upload handling
router.post('/donation', upload.single('receipt'), createDonation);

module.exports = router;