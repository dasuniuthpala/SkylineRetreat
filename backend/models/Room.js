const mongoose = require('mongoose');

// Room Schema - for hotel room information
const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide room name'],
      trim: true,
      unique: true,
    },
    type: {
      type: String,
      required: [true, 'Please provide room type'],
      enum: ['Single', 'Double', 'Suite', 'Deluxe', 'Presidential'],
      default: 'Single',
    },
    description: {
      type: String,
      required: [true, 'Please provide room description'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide room price'],
      min: [0, 'Price cannot be negative'],
    },
    capacity: {
      type: Number,
      required: [true, 'Please provide room capacity'],
      min: [1, 'Capacity must be at least 1'],
      max: [10, 'Capacity cannot exceed 10'],
    },
    size: {
      type: Number, // Size in square meters
      required: [true, 'Please provide room size'],
      min: [10, 'Size must be at least 10 sqm'],
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/400x300?text=Hotel+Room',
    },
    amenities: [
      {
        type: String, // e.g., 'WiFi', 'TV', 'Mini Bar', 'Balcony'
      },
    ],
    availability: {
      type: Boolean,
      default: true,
    },
    featured: {
      type: Boolean,
      default: false, // For displaying on home screen
    },
    rating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5'],
      default: 4.5,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Room', roomSchema);
