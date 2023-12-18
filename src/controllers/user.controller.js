import User from "../models/user.modals.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSignup = async (req, res) => {
  try {
    const signup = await User.create(req.body);
    res.status(200).json({ signup, message: "Account Created successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user with the provided email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "abcccc", {
      expiresIn: "1h", // You can set the expiration time as needed
    });

    const userProfile = {
      userId: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
    };

    res.status(200).json({ token, userProfile, message: "Login successful" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export { userSignup, userLogin };
