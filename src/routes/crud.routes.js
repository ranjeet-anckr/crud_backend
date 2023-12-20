import express from "express";
import {
  getData,
  getDataById,
  deleteData,
  AddData,
  editData,
} from "../controllers/crud.controller.js";

const router = express.Router();

router.get("/crud", getData);
router.post("/crud", AddData);
router.delete("/crud/:id", deleteData);
router.get("/crud/:id", getDataById);
router.put("/crud/:id", editData);

export default router;
