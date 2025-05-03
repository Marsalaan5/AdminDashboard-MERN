// models/User.js
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

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



// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt'); // ✅ Import bcrypt for password hashing

// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true // ✅ Removes extra spaces
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true, // ✅ Ensure emails are stored in lowercase
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     avatar: {
//         type: String, // ✅ URL to profile picture (optional)
//         default: "https://example.com/default-avatar.png" // Provide a default avatar
//     }
// }, { timestamps: true }); // ✅ Auto adds createdAt & updatedAt

// // ✅ Pre-save hook to hash password before storing
// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next(); // Only hash if password is changed
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// // ✅ Method to compare entered password with stored hash
// UserSchema.methods.comparePassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model('User', UserSchema);
