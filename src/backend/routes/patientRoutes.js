const express = require("express");
const { getAllPatients } = require("./../controllers/patientController");
const { signup, login, protect } = require("./../controllers/authController");

const router = express.Router();

router.post("/diagnosis", signup)

router.post("/signup", signup)
router.post("/login", login)

router.route("/").get(getAllPatients)

module.exports = router;
