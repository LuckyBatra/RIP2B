const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); // For sending emails

router.get('/', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your preferred email service
      auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
      }
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: 'recipient_email@example.com', // Replace with your recipient email
      subject: `Message from ${name}`,
      text: message
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.render('contact', { title: 'Contact Us', success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;