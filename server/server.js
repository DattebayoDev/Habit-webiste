// server.js

// Import required packages
const express = require('express');     // Express is our web framework
const mongoose = require('mongoose');    // Mongoose helps us work with MongoDB
require('dotenv').config();             // Loads our environment variables from .env file

// Create Express application
const app = express();

// Middleware setup
app.use(express.json());  // This lets us handle JSON data in requests

// MongoDB Connection
// We use mongoose.connect() to connect to our database
// The connection string is stored safely in our .env file
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))  // Success message
  .catch(err => console.error('MongoDB connection error:', err));  // Error handling

// Test route
// When someone visits the homepage ('/'), send back a JSON response
app.get('/', (req, res) => {
  res.json({ message: 'Habit Tracker API is running' });
});

// Error handling middleware
// This catches any errors that happen in our routes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
// Use PORT from .env file, or default to 5000 if not specified
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});