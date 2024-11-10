import express from "express";
import { User } from "../models/models.user.js";
import {
  getAllUsers,
  register,
  login,
  getMyProfile,
  logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

//dynamic routing example
router.get("/me", isAuthenticated, getMyProfile);

router.get("/logout", logout);
router.post("/new", register);
router.post("/login", login);

export default router;
