// student-portal-backend/routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const { submitReport } = require('../controllers/reportc'); // Import the controller function

// @route   POST /api/reports/submit
// @desc    Submit a new bullying report
// @access  Public (adjust access later if authentication is added)
router.post('/submit', submitReport);

// Optional: Add GET route later if needed for admins
// router.get('/', getAllReports);

module.exports = router;