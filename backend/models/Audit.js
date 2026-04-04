const mongoose = require('mongoose');

const AuditSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['single', 'comparison'],
    default: 'single'
  },
  url: {
    type: String,
    required: function() { return this.type === 'single'; }
  },
  score: {
    type: Number,
    required: function() { return this.type === 'single'; }
  },
  patterns: [
    {
      type: { type: String },
      severity: { type: String },
      description: { type: String },
      suggestion: { type: String },
    }
  ],
  comparison: {
    siteA: {
      url: String,
      score: Number,
      patternsCount: Number,
      patterns: Array
    },
    siteB: {
      url: String,
      score: Number,
      patternsCount: Number,
      patterns: Array
    },
    winner: String,
    scoreDifference: Number
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Audit', AuditSchema);
