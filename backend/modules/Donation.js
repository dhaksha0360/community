// /backend/models/Donation.js
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  receipt: {
    type: String,  // URL to the uploaded file (or you can use a Buffer if storing file data directly)
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;