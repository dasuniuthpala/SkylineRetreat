// Import required dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
const facilityRoutes = require('./routes/facilityRoutes');
const foodRoutes = require('./routes/foodRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  });

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/facilities', facilityRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/bookings', bookingRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Skyline Retreat Hotel API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      rooms: '/api/rooms',
      facilities: '/api/facilities',
      food: '/api/food',
      bookings: '/api/bookings',
    },
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 API URL: http://localhost:${PORT}`);
});

module.exports = app;
