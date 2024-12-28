const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); // Assuming an auth middleware

// Protect admin routes with authentication middleware
router.use(authMiddleware); 

// Admin dashboard route
router.get('/', (req, res) => {
  res.render('admin/dashboard', { title: 'Admin Dashboard' });
});

// Route for managing courses (example)
router.get('/courses', (req, res) => {
  // Logic to get a list of courses
  res.render('admin/courses', { title: 'Manage Courses' });
});

// Add more routes for admin functionalities like adding/editing courses, managing users, etc.

module.exports = router;