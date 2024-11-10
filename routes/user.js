import express from "express";
import { User } from "../models/models.user.js";
import {
  getAllUsers,
  register,
  login,
  getMyProfile,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

//dynamic routing example
router.get("/me", getMyProfile);

router.post("/new", register);
router.post("/login", login);

export default router;
