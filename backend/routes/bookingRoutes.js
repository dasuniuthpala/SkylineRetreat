const express = require('express');
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  getMyBookings,
  getBookingById,
  updateBooking,
  cancelBooking,
} = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');

// All booking routes require authentication
router.use(protect);

router.post('/', createBooking);
router.get('/', getAllBookings); // Admin only in production
router.get('/my-bookings', getMyBookings);
router.get('/:id', getBookingById);
router.put('/:id', updateBooking); // Admin only in production
router.delete('/:id', cancelBooking);

module.exports = router;
