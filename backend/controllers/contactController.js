const Contact = require("../models/contactModel");

// Handle form submission
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation (Optional)
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to database
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error. Try again later." });
  }
};