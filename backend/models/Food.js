const mongoose = require('mongoose');

// Food Schema - for restaurant menu items
const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide food name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide food description'],
      maxlength: [300, 'Description cannot exceed 300 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide food price'],
      min: [0, 'Price cannot be negative'],
    },
    category: {
      type: String,
      required: [true, 'Please provide food category'],
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Beverages', 'Snacks'],
      default: 'Lunch',
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/300x200?text=Food+Item',
    },
    cuisine: {
      type: String,
      enum: ['Continental', 'Asian', 'Italian', 'Indian', 'Mexican', 'Other'],
      default: 'Continental',
    },
    available: {
      type: Boolean,
      default: true,
    },
    isVegetarian: {
      type: Boolean,
      default: false,
    },
    spicyLevel: {
      type: String,
      enum: ['None', 'Mild', 'Medium', 'Hot'],
      default: 'None',
    },
    rating: {
      type: Number,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5'],
      default: 4.0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Food', foodSchema);
