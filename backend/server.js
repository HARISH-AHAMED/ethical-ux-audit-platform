const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const Audit = require('./models/Audit');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;
if (mongoURI) {
  mongoose.connect(mongoURI)
    .then(() => console.log('✅ Connected to MongoDB Atlas'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));
} else {
  console.warn('⚠️ MONGODB_URI not found in .env. Running in mock-only mode.');
}

// Routes
app.get('/', (req, res) => {
  res.send('Ethical UX Audit API Running');
});

// POST /api/scan - Mock Scan & Save to DB
app.post('/api/scan', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Mock Detection Logic
  const mockResults = {
    url,
    score: 64,
    patterns: [
      {
        type: 'Forced Sign-Up',
        severity: 'High',
        description: 'The website prevents access to pricing information until a user creates an account.',
        suggestion: 'Allow users to view essential information like pricing and features without prior registration.',
      },
      {
        type: 'Fake Urgency',
        severity: 'Medium',
        description: 'A countdown timer was detected that resets upon page reload, creating artificial pressure.',
        suggestion: 'Remove artificial countdowns. Use real-time inventory data if urgency is necessary.',
      }
    ]
  };

  try {
    // Save to MongoDB if connected
    if (mongoose.connection.readyState === 1) {
      const newAudit = new Audit(mockResults);
      await newAudit.save();
      console.log(`💾 Audit saved to DB for: ${url}`);
    }

    // Return the results
    res.json(mockResults);
  } catch (error) {
    console.error('❌ Error saving audit:', error);
    res.status(500).json({ error: 'Failed to process audit' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
