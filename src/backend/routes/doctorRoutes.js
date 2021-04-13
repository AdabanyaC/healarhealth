const express = require("express");
const {
  createDoctor,
  getAllDoctors,
} = require("./../controllers/doctorController");

const router = express.Router();

router.route("/").get(getAllDoctors).post(createDoctor);

module.exports = router;
