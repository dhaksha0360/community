require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const donationRoutes = require('./routes/donationRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/donation', donationRoutes);
app.use('/api/contact', contactRoutes);

// Default API route
app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));