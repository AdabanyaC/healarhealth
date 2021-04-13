const Doctor = require("../models/doctorModel");
const CatchAsync = require("./../utils/catchAsync");

// Create a New Doctor Controller
exports.createDoctor = CatchAsync(async (req, res, next) => {
  const newDoctor = await Doctor.create(req.body);
  res.status(201).json({
    status: "Success",
    data: {
      doctor: newDoctor,
    },
  });
});

// Get All Doctors
exports.getAllDoctors = CatchAsync(async (req, res, next) => {
  const doctors = await Doctor.find(req.query);

  // SEND RESPONSE
  res.status(200).json({
    status: "Success",
    results: doctors.length,
    data: {
      doctors,
    },
  });
});
