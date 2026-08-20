import * as dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log("connected to MongoDB"))
    .catch((err) => {
      console.log(err.message);
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => {
      console.log("server started on port 8080 ");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();