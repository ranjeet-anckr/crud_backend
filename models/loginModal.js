const mongoose = require("mongoose");

const loginSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your full name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your correct email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
    contactNo: {
      type: Number,
      required: false, // "false" is not necessary here since it's optional by default
    },
  },
  {
    timestamps: true,
  }
);

const Signup = mongoose.model("user", signupSchema);

module.exports = Signup;
