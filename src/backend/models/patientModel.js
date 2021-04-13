const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const patientSchema = new mongoose.Schema({
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
  location: {
    type: String,
    required: [
      false,
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
    select: false,
  },
  passwordChangedAt: {
    type: Date
  }
});

patientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

patientSchema.methods.correctPassword = async function(candidatePassword, patientpassword) {
  return await bcrypt.compare(candidatePassword, patientpassword)
}

patientSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10)
    return JWTTimestamp < changedTimestamp
  }

  // False means the Patient hasn't changed his password
  return false;
}

const Patient = new mongoose.model("Patient", patientSchema);

module.exports = Patient;
