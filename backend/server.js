require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const donationRoutes = require('./routes/donationRoutes'); // Import donation routes
const contactRoutes = require("./routes/contactRoutes"); // Import the routes

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Use the authentication routes
app.use('/api/auth', authRoutes); 

// Use the donation routes
app.use('/api/donation', donationRoutes);  // Prefix routes with '/api'

// Routes
app.use("/api/contact", contactRoutes);

// Default API route
app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));