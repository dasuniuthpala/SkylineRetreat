const Facility = require('../models/Facility');

// @desc    Get all facilities
// @route   GET /api/facilities
// @access  Public
exports.getAllFacilities = async (req, res) => {
  try {
    const { category, available } = req.query;

    // Build filter object
    const filter = {};
    if (category) filter.category = category;
    if (available) filter.available = available === 'true';

    const facilities = await Facility.find(filter).sort('name');

    res.status(200).json({
      success: true,
      count: facilities.length,
      data: facilities,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single facility by ID
// @route   GET /api/facilities/:id
// @access  Public
exports.getFacilityById = async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id);

    if (!facility) {
      return res.status(404).json({
        success: false,
        message: 'Facility not found',
      });
    }

    res.status(200).json({
      success: true,
      data: facility,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create new facility
// @route   POST /api/facilities
// @access  Private/Admin
exports.createFacility = async (req, res) => {
  try {
    const facility = await Facility.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Facility created successfully',
      data: facility,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update facility
// @route   PUT /api/facilities/:id
// @access  Private/Admin
exports.updateFacility = async (req, res) => {
  try {
    const facility = await Facility.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!facility) {
      return res.status(404).json({
        success: false,
        message: 'Facility not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Facility updated successfully',
      data: facility,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete facility
// @route   DELETE /api/facilities/:id
// @access  Private/Admin
exports.deleteFacility = async (req, res) => {
  try {
    const facility = await Facility.findByIdAndDelete(req.params.id);

    if (!facility) {
      return res.status(404).json({
        success: false,
        message: 'Facility not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Facility deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
