const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Import the User model for MongoDB

// Middleware to authenticate the token
const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify token using JWT_SECRET (from your .env file)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach decoded user info to the request object
    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Middleware to check if the user has admin rights
const isAdmin = async (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
};

module.exports = { authenticateToken, isAdmin };
