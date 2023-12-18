import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your full name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
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

const User = mongoose.model("Signup", userSchema);

export default User;
