const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const Patient = require("./../models/patientModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Signing Up patients
exports.signup = catchAsync(async (req, res, next) => {
  const newPatient = await Patient.create(req.body);

  const token = signToken(newPatient._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newPatient,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exists
  if (!email || !password) {
    return next(new AppError("Please, provide an email and password", 400));
  }

  // Check if user exists and password is correct
  const patient = await Patient.findOne({ email }).select("+password");

  if (
    !patient ||
    !(await patient.correctPassword(password, patient.password))
  ) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // If OK, send response to client
  const token = signToken(patient._id);
  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // Get token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(token);

  if (!token) {
    return next(
      new AppError(
        "You are not logged in. Login to get access to this request",
        401
      )
    );
  }

  // Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user still exists
  const patientExists = await Patient.findById(decoded.id);
  if (!patientExists) {
    return next(
      new AppError("The user belonging to this token no longer exists.", 401)
    );
  }

  // Check if user changed password after token was issued
  if (patientExists.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please, login again.", 401)
    );
  }

  // GRANT ACCESS TO THE PROTECTED ROUTE
  req.patient = patientExists;
  next();
});
