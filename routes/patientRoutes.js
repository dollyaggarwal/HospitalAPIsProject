const express = require('express');
const patientController = require('../controllers/patientController');
const auth = require('../utils/auth');

const router = express.Router();

router.post('/register', patientController.register);
router.post('/:id/create_report',auth, patientController.createReport);
router.get('/:id/all_reports',auth, patientController.getAllReports);

module.exports = router;
