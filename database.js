// config/database.js

const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/training_institute'; // Replace with your MongoDB URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

module.exports = mongoose;