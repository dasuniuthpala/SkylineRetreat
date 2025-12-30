const Food = require('../models/Food');

// @desc    Get all food items
// @route   GET /api/food
// @access  Public
exports.getAllFood = async (req, res) => {
  try {
    const { category, cuisine, isVegetarian, available } = req.query;

    // Build filter object
    const filter = {};
    if (category) filter.category = category;
    if (cuisine) filter.cuisine = cuisine;
    if (isVegetarian) filter.isVegetarian = isVegetarian === 'true';
    if (available) filter.available = available === 'true';

    const foodItems = await Food.find(filter).sort('name');

    res.status(200).json({
      success: true,
      count: foodItems.length,
      data: foodItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single food item by ID
// @route   GET /api/food/:id
// @access  Public
exports.getFoodById = async (req, res) => {
  try {
    const foodItem = await Food.findById(req.params.id);

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        message: 'Food item not found',
      });
    }

    res.status(200).json({
      success: true,
      data: foodItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create new food item
// @route   POST /api/food
// @access  Private/Admin
exports.createFood = async (req, res) => {
  try {
    const foodItem = await Food.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Food item created successfully',
      data: foodItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update food item
// @route   PUT /api/food/:id
// @access  Private/Admin
exports.updateFood = async (req, res) => {
  try {
    const foodItem = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        message: 'Food item not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Food item updated successfully',
      data: foodItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete food item
// @route   DELETE /api/food/:id
// @access  Private/Admin
exports.deleteFood = async (req, res) => {
  try {
    const foodItem = await Food.findByIdAndDelete(req.params.id);

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        message: 'Food item not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Food item deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get food items by category
// @route   GET /api/food/category/:category
// @access  Public
exports.getFoodByCategory = async (req, res) => {
  try {
    const foodItems = await Food.find({
      category: req.params.category,
      available: true,
    }).sort('name');

    res.status(200).json({
      success: true,
      count: foodItems.length,
      data: foodItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
