const mongoose = require('mongoose');

// Booking Schema - for room reservations
const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Booking must belong to a user'],
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Booking must be for a room'],
    },
    checkInDate: {
      type: Date,
      required: [true, 'Please provide check-in date'],
    },
    checkOutDate: {
      type: Date,
      required: [true, 'Please provide check-out date'],
    },
    numberOfGuests: {
      type: Number,
      required: [true, 'Please provide number of guests'],
      min: [1, 'Number of guests must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Please provide total price'],
      min: [0, 'Total price cannot be negative'],
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
      default: 'Pending',
    },
    specialRequests: {
      type: String,
      maxlength: [500, 'Special requests cannot exceed 500 characters'],
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Refunded'],
      default: 'Pending',
    },
    paymentMethod: {
      type: String,
      enum: ['Cash', 'Credit Card', 'Debit Card', 'Online'],
      default: 'Cash',
    },
  },
  {
    timestamps: true,
  }
);

// Calculate number of nights
bookingSchema.virtual('numberOfNights').get(function () {
  const timeDiff = this.checkOutDate - this.checkInDate;
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
});

// Ensure check-out date is after check-in date
bookingSchema.pre('save', function (next) {
  if (this.checkOutDate <= this.checkInDate) {
    return next(new Error('Check-out date must be after check-in date'));
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
