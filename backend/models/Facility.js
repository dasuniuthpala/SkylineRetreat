const mongoose = require('mongoose');

// Facility Schema - for hotel amenities and services
const facilitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide facility name'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide facility description'],
      maxlength: [300, 'Description cannot exceed 300 characters'],
    },
    icon: {
      type: String,
      default: 'star', // Icon name for React Native icons
    },
    available: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
      enum: ['Recreation', 'Services', 'Dining', 'Business', 'Other'],
      default: 'Other',
    },
    operatingHours: {
      type: String,
      default: '24/7',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Facility', facilitySchema);
