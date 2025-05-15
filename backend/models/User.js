// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  image: { type: String },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});



const User = mongoose.model('User', userSchema);
module.exports = User;
