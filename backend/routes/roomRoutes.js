const express = require('express');
const router = express.Router();
const {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
  getFeaturedRooms,
} = require('../controllers/roomController');
const { protect } = require('../middleware/auth');

// Public routes
router.get('/', getAllRooms);
router.get('/featured/list', getFeaturedRooms);
router.get('/:id', getRoomById);

// Protected routes (Admin only in production)
router.post('/', protect, createRoom);
router.put('/:id', protect, updateRoom);
router.delete('/:id', protect, deleteRoom);

module.exports = router;
