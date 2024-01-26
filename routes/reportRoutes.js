const express = require('express');
const reportController = require('../controllers/reportController');
const auth = require('../utils/auth');

const router = express.Router();

router.get('/:status',auth, reportController.getReportsByStatus);

// Add other report routes as needed

module.exports = router;
