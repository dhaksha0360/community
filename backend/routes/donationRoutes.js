const express = require('express');
const { createDonation } = require('../controllers/donationController');

const router = express.Router();

// Donation route with file upload handling
router.post('/', createDonation);

module.exports = router;