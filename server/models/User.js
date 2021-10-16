const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  phone: {
    type: String,
    required: true,
    validate(value) {
      const regex = /(0\/91)?[6-9][0-9]{9}/;
      if (!regex.test(value)) {
        throw new Error("Please enter a valid phone number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
  },
});

module.exports = User = mongoose.model('user', userSchema)
