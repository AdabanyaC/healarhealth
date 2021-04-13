const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please, enter your first name."],
  },
  last_name: {
    type: String,
    required: [true, "Please, enter your last name."],
  },
  email: {
    type: String,
    required: [true, "Please, enter your email."],
    unique: true,
  },
  phone_number: {
    type: Number,
    unique: true,
  },
  specialization: {
    type: String,
    required: [
      true,
      "Your specialization is required to connect you with patients with related ailments.",
    ],
  },
  experience: {
    type: String,
    required: [
      true,
      "Your years of experience is required.",
    ],
  },
  location: {
    type: String,
    required: [
      true,
      "Your location is required to connect with the best doctors around you",
    ],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: [true, "Please choose a password."],
  },
});

const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
