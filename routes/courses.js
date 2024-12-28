const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Seed data for courses (you can remove this later)
const initialCourses = [
  {
    name: "HSCIT",
    duration: "3 Months",
    fee: 4500,
    description: "Basic, Windows, Internet, Typing, MS-Office ",
    track: null,
    notes: null,
    image: "/hscit.jpg  "
  },
  {
    name: "HSCIT A",
    duration: "6 Months",
    fee: 9000,
    description: "HS-CIT + 1 Module of HCOC Course",
    track: null,
    notes: "Exemption from SETC(Part-1) Test of Haryana Government",
    image: "/hscita.jpg"
  },
  {
    name: "HSCIT A+",
    duration: "12 Months",
    fee: 18000,
    description: "HS-CIT + 3 Module of HCOC Courses",
    notes: "Exemption from SETC(Part-1) Test of Haryana Government",
    image: "/hscitaa.jpg"
  },
  {
    name: "Fin. Accounting - TALLY",
    duration: "3 Months",
    fee: 4500,
    description: "Accounting & Practices using Tally Prime.",
    track: "Accounting Track",
    notes: null,
    image: "/tally.jpg"
  },
  {
    name: "Advance Accounting",
    duration: "3 Months",
    fee: 4500,
    description: "In-depth study of accounting concepts, including financial statements, taxation, and auditing.",
    track: "Accounting Track",
    notes: null,
    image: "/atally.jpg"
  },
  {
    name: "Advance Excel",
    duration: "3 Months",
    fee: 4500,
    description: "Master advanced Excel functions, formulas, and data analysis techniques.",
    track: "Accounting Track",
    notes: null,
    image: "/aexcel.jpg"
  },
  {
    name: "C & C++ Programming",
    duration: "3 Months",
    fee: 4500,
    description: "Learn the fundamentals of C and C++ programming languages.",
    track: "Programming Track",
    notes: null,
    image: "/cpp.jpg"

  },
  {
    name: "Web Designing",
    duration: "3 Months",
    fee: 4500,
    description: "Learn HTML, CSS, JavaScript, and other web development technologies.",
    track: "Designing Track",
    notes: null,
    image: "/webd.jpg"
  },
  {
    name: "Office Assistance",
    duration: "3 Months",
    fee: 4500,
    description: "office automation.",
    track: "Job Rediness Track",
    notes: null,
    image: "/webd.jpg"
  },
  {
    name: "English Comminucation & Soft Skills",
    duration: "3 Months",
    fee: 4500,
    description: "ECSS",
    track: "Designing Track",
    notes: null,
    image: "/webd.jpg"
  },

  {
    name: "AutoCAD",
    duration: "3 Months",
    fee: 4500,
    description: "aaaa.",
    track: "Digital Art Track",
    notes: null,
    image: "/webd.jpg"
  },

  {
    name: "DTP (CorelDraw)",
    duration: "3 Months",
    fee: 4500,
    description: "aaaa.",
    track: "Designing Track",
    notes: null,
    image: "/webd.jpg"
  },

  {
    name: "Photo Editing",
    duration: "3 Months",
    fee: 4500,
    description: "a",
    track: "Designing Track",
    notes: null,
    image: "/webd.jpg"
  },

  {
    name: "Video Editing",
    duration: "3 Months",
    fee: 4500,
    description: "aaaa",
    track: "Designing Track",
    notes: null,
    image: "/webd.jpg"
  }



];

// Seed the database with initial courses (you can remove this later)
Course.deleteMany({})
  .then(() => Course.insertMany(initialCourses))
  .then(() => console.log('Courses seeded successfully'))
  .catch(err => console.error('Error seeding courses:', err));

// Route to display all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.render('courses', { courses });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// ... other routes for specific courses (show, create, update, delete) ...

module.exports = router;