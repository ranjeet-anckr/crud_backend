const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController"); // Import the controller

// Define the login route
router.post("/login", authController.login);
router.post("/signup", authController.signUp);

module.exports = router;
