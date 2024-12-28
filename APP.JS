const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require("path");



const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/training_institute')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Set up EJS
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/images")));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));


// Middleware to provide navbar to all routes
app.use((req, res, next) => {
  res.locals.navLinks = [
    { url: '/', title: 'Home' },
    { url: '/courses', title: 'Courses' },
    { url: '/about', title: 'About Us' },
    { url: '/contact', title: 'Contact' },
    // Add admin link if user is logged in
    // ... (authentication logic here) ...
  ];
  next(); 
});

// Define routes
app.use('/', require('./routes/index'));
app.use('/courses', require('./routes/courses'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/admin', require('./routes/admin'));

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});