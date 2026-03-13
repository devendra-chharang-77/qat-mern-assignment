const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // Hashed password [cite: 23, 43]
  role: { 
    type: String, 
    enum: ['admin', 'manager', 'user'], 
    default: 'user' 
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);