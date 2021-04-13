const Patient = require('../models/patientModel')
const CatchAsync = require('./../utils/catchAsync')

// Get All Patients
exports.getAllPatients = CatchAsync(async (req, res, next) => {
  const patients = await Patient.find(req.query)

  // SEND RESPONSE
  res.status(200).json({
    status: "Success",
    results: patients.length,
    data: {
      patients,
    },
  });
});