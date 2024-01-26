const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  phoneNumber: String,
  // Add other patient details as needed
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
