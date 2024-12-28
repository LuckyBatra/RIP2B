// middleware/auth.js

const jwt = require('jsonwebtoken'); 

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; 

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, 'your_secret_key'); // Replace with your actual secret key

    req.user = decoded; 
    next(); 
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authMiddleware;