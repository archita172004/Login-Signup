import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectdb = () =>
  mongoose
    .connect(`${process.env.MONGOOSE_URL}`, {
      dbName: "backendAPI",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));

export default connectdb;
