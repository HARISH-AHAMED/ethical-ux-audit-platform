const mongoose = require('mongoose');

const AuditSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  patterns: [
    {
      type: { type: String },
      severity: { type: String },
      description: { type: String },
      suggestion: { type: String },
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Audit', AuditSchema);
