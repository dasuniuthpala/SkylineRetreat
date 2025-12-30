const Room = require('../models/Room');

// @desc    Get all rooms
// @route   GET /api/rooms
// @access  Public
exports.getAllRooms = async (req, res) => {
  try {
    const { type, minPrice, maxPrice, availability, featured } = req.query;

    // Build filter object
    const filter = {};
    if (type) filter.type = type;
    if (availability) filter.availability = availability === 'true';
    if (featured) filter.featured = featured === 'true';
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const rooms = await Room.find(filter).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: rooms.length,
      data: rooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single room by ID
// @route   GET /api/rooms/:id
// @access  Public
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found',
      });
    }

    res.status(200).json({
      success: true,
      data: room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create new room
// @route   POST /api/rooms
// @access  Private/Admin
exports.createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Room created successfully',
      data: room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update room
// @route   PUT /api/rooms/:id
// @access  Private/Admin
exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Room updated successfully',
      data: room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete room
// @route   DELETE /api/rooms/:id
// @access  Private/Admin
exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: 'Room not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Room deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get featured rooms
// @route   GET /api/rooms/featured/list
// @access  Public
exports.getFeaturedRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ featured: true, availability: true })
      .sort('-rating')
      .limit(5);

    res.status(200).json({
      success: true,
      count: rooms.length,
      data: rooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
