const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  status: { type: String, enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'] },
  date: { type: Date, default: Date.now },
  // Add other report details as needed
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
