// models/Course.js

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  track: { 
    type: String 
  }, 
  notes: {
    type: String 
  },
  image: {
    type: String 
  }
});

module.exports = mongoose.model('Course', courseSchema);