import express from "express";
import { userSignup, userLogin } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signUp", userSignup);
router.get("/login", userLogin);

export default router;
