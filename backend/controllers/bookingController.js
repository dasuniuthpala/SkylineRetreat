const Booking = require('../models/Booking');
const Room = require('../models/Room');
const User = require('../models/User');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
exports.createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, numberOfGuests, specialRequests } = req.body;

    // Check if room exists and is available
    const roomData = await Room.findById(room);
    if (!roomData) {
      return res.status(404).json({
        success: false,
        message: 'Room not found',
      });
    }

    if (!roomData.availability) {
      return res.status(400).json({
        success: false,
        message: 'Room is not available',
      });
    }

    // Check if number of guests exceeds room capacity
    if (numberOfGuests > roomData.capacity) {
      return res.status(400).json({
        success: false,
        message: `Room capacity is ${roomData.capacity} guests`,
      });
    }

    // Calculate number of nights
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut - checkIn;
    const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (numberOfNights <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Check-out date must be after check-in date',
      });
    }

    // Calculate total price
    const totalPrice = numberOfNights * roomData.price;

    // Create booking
    const booking = await Booking.create({
      user: req.user.id,
      room,
      checkInDate,
      checkOutDate,
      numberOfGuests,
      totalPrice,
      specialRequests,
    });

    // Add booking to user's bookings array
    await User.findByIdAndUpdate(req.user.id, {
      $push: { bookings: booking._id },
    });

    // Populate booking with room and user details
    const populatedBooking = await Booking.findById(booking._id)
      .populate('room')
      .populate('user', 'name email phone');

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: populatedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private/Admin
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('room', 'name type price')
      .populate('user', 'name email phone')
      .sort('-createdAt');

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get user's bookings
// @route   GET /api/bookings/my-bookings
// @access  Private
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('room', 'name type price image')
      .sort('-createdAt');

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single booking by ID
// @route   GET /api/bookings/:id
// @access  Private
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('room')
      .populate('user', 'name email phone');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    // Check if user owns the booking or is admin
    if (booking.user._id.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this booking',
      });
    }

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private/Admin
exports.updateBooking = async (req, res) => {
  try {
    const { status, paymentStatus } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, paymentStatus },
      {
        new: true,
        runValidators: true,
      }
    )
      .populate('room')
      .populate('user', 'name email');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Cancel booking
// @route   DELETE /api/bookings/:id
// @access  Private
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    // Check if user owns the booking
    if (booking.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to cancel this booking',
      });
    }

    // Update booking status to cancelled
    booking.status = 'Cancelled';
    await booking.save();

    res.status(200).json({
      success: true,
      message: 'Booking cancelled successfully',
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
