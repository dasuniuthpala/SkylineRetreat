const express = require('express');
const router = express.Router();
const {
  getAllFacilities,
  getFacilityById,
  createFacility,
  updateFacility,
  deleteFacility,
} = require('../controllers/facilityController');
const { protect } = require('../middleware/auth');

// Public routes
router.get('/', getAllFacilities);
router.get('/:id', getFacilityById);

// Protected routes (Admin only in production)
router.post('/', protect, createFacility);
router.put('/:id', protect, updateFacility);
router.delete('/:id', protect, deleteFacility);

module.exports = router;
