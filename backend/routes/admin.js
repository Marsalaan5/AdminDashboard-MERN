// const express = require('express');
// const { authenticate, authorizeRoles } = require('../middleware/auth');
// const User = require('../models/User');
// const router = express.Router();

// // Get all users
// router.get('/users', authenticate, authorizeRoles('admin'), async (req, res) => {
//   const users = await User.find().select('-password');
//   res.json(users);
// });

// // Update user role
// router.put('/users/:id/role', authenticate, authorizeRoles('admin'), async (req, res) => {
//   const { role } = req.body;
//   if (!['user', 'admin'].includes(role)) {
//     return res.status(400).json({ msg: 'Invalid role' });
//   }

//   await User.findByIdAndUpdate(req.params.id, { role });
//   res.json({ message: 'Role updated' });
// });

// module.exports = router;
