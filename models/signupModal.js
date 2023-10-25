const mongoose = require("mongoose");

const signupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your full name"],
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      default: 0,
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

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;
