const express = require("express");
const morgan = require("morgan");
const cors = require("cors")

const patientRouter = require("./routes/patientRoutes");
const doctorRouter = require("./routes/doctorRoutes");

const app = express();

app.use(cors())

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Patient Router
app.use("/api/v1/patients", patientRouter);

// Doctor Router
app.use("/api/v1/doctors", doctorRouter);

module.exports = app;
