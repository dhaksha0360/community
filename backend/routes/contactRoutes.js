const express = require("express");
const router = express.Router();
const Contact = require("../modules/contact"); // Assuming you have a Mongoose model

// @route   POST /api/contact
// @desc    Save contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    // Create a new contact entry
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error, try again later." });
  }
});

module.exports = router;