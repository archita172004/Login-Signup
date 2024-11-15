import express from "express";

import mongoose from "mongoose";

import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";

import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

export const app = express();

// using middleware
app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//router
const router = express.Router();

app.use("/api/v1/user/", userRouter);

app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("<h1>nice</h1>");
});

//using error middleware
app.use(errorMiddleware);
// app.get("/users/all", async (req, res) => {
//   const users = await User.find({});
//   res.json({
//     success: true,
//     users,
//   });
// });

// //dynamic routing example
// app.get("/userid/:userID", async (req, res) => {
//   const { userID } = req.params;
//   const user = await User.findById(userID);

//   res.json({
//     success: true,
//     user,
//   });
// });

// app.post("/users/new", async (req, res) => {
//   const { name, email, password } = req.body;

//   const users = await User.create({
//     name,
//     email,
//     password,
//   });
//   res.status(201).cookie("temp", "nothing").json({
//     success: true,
//     message: "resgitered",
//   });
// });
