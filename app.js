import express from "express";

import mongoose from "mongoose";

import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";

export const app = express();

// using middleware
app.use(express.json());

app.use(cookieParser());

//router
const router = express.Router();

app.use("/api/v1/user/", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>nice</h1>");
});

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
