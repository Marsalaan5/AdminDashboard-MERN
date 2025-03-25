const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true, default: 'Not Provided' }, // Default if not provided
    total_buy: { type: Number, required: true, default: 0 },  // Default to 0
    total_paid: { type: Number, required: true, default: 0 }, // Default to 0
    total_due: { type: Number, required: true, default: 0 },  // Default to 0
  },
  { timestamps: true }
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
