const mongoose = require("mongoose");

const signupSchema = mongoose.Schema(
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
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Signup = mongoose.model("user", signupSchema);

module.exports = Signup;
