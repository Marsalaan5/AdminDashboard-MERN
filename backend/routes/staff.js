const express = require('express');
const Staff = require('../models/Staff');
const router = express.Router();
const mongoose = require("mongoose")

// Get all staffs
router.get('/', async (req, res) => {
  try {
    const staffs = await Staff.find();
    res.json(staffs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new staff
router.post('/', async (req, res) => {
  const {name, designation, address, contact, email } = req.body;

  const newStaff = new Staff({
    name,
    designation,
    address,
    contact,
    email,

  });

  try {
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing staff (optional)
router.put('/:id', async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (!staff) {
      return res.status(404).json({ message: 'staff not found' });
    }

    const { name, designation, address, contact, email} = req.body;

    staff.name = name || staff.name;
    staff.designation= designation || staff.designation;
    staff.address = address || staff.address;
    staff.contact = contact || staff.contact;
    staff.email = email || staff.email;
  

    const updatedStaff = await staff.save();
    res.json(updatedStaff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a staff (optional)
// Delete a staff
router.delete('/:id', async (req, res) => {
    const staffId = req.params.id;
  
    if (!mongoose.Types.ObjectId.isValid(staffId)) {
      return res.status(400).json({ message: 'Invalid staff ID' });
    }
  
    try {
      const staff = await Staff.findOneAndDelete({ _id: staffId });
  
      if (!staff) {
        return res.status(404).json({ message: 'staff not found' });
      }
  
      res.json({ message: 'staff deleted' });
    } catch (err) {
      console.error(err);  // Log the error to the server console
      res.status(500).json({ message: 'Server error during deletion' });
    }
  });
  

module.exports = router;
