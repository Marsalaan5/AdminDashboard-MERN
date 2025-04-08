const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true, default: 'Not Provided' },
 
  },
  { timestamps: true }
);

const staff = mongoose.model('staff', staffSchema);

module.exports = staff;
