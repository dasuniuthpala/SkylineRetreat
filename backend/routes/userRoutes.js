const express = require('express');
const router = express.Router();
const {
  signup,
  signin,
  getProfile,
  updateProfile,
  getAllUsers,
} = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// Public routes
router.post('/signup', signup);
router.post('/signin', signin);

// Protected routes
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.get('/', protect, getAllUsers); // Admin only in production

module.exports = router;
