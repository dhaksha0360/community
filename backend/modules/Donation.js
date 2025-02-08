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
    type: String,  // Store file path as a string
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;