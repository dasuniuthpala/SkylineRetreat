const express = require('express');
const router = express.Router();
const {
  getAllFood,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
  getFoodByCategory,
} = require('../controllers/foodController');
const { protect } = require('../middleware/auth');

// Public routes
router.get('/', getAllFood);
router.get('/category/:category', getFoodByCategory);
router.get('/:id', getFoodById);

// Protected routes (Admin only in production)
router.post('/', protect, createFood);
router.put('/:id', protect, updateFood);
router.delete('/:id', protect, deleteFood);

module.exports = router;
