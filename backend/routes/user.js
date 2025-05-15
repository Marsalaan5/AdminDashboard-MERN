const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // 
const User = require('../models/User');
const router = express.Router();

const { authenticateToken, isAdmin } = require('../middleware/auth');


// Get all users
router.get("/", authenticateToken, async (req, res) => {
  try {
    const users = await User.find({}, 'name email role image status');
    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// Update user
router.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role, image, status } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    // user.permissions = permissions || user.permissions;
    user.image = image || user.image;
    user.status = status || user.status;

    if (password  && password.trim() !== '') {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt); 
    }
    

    await user.save();
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update user" });
  }
});

// Delete user
router.delete("/:id", authenticateToken,isAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete user" });
  }
});

module.exports = router;
