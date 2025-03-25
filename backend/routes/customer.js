const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();
const mongoose = require("mongoose")

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new customer
router.post('/', async (req, res) => {
  const { name, company, address, contact, total_buy, total_paid, total_due } = req.body;

  const newCustomer = new Customer({
    name,
    company,
    address,
    contact,
    total_buy,
    total_paid,
    total_due,
  });

  try {
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing customer (optional)
router.put('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const { name, company, address, contact, total_buy, total_paid, total_due } = req.body;

    customer.name = name || customer.name;
    customer.company = company || customer.company;
    customer.address = address || customer.address;
    customer.contact = contact || customer.contact;
    customer.total_buy = total_buy || customer.total_buy;
    customer.total_paid = total_paid || customer.total_paid;
    customer.total_due = total_due || customer.total_due;

    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a customer (optional)
// Delete a customer
router.delete('/:id', async (req, res) => {
    const customerId = req.params.id;
  
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return res.status(400).json({ message: 'Invalid customer ID' });
    }
  
    try {
      const customer = await Customer.findOneAndDelete({ _id: customerId });
  
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
  
      res.json({ message: 'Customer deleted' });
    } catch (err) {
      console.error(err);  // Log the error to the server console
      res.status(500).json({ message: 'Server error during deletion' });
    }
  });
  

module.exports = router;
