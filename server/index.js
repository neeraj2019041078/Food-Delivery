import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import UserRoutes from "./routes/User.js";
import FoodRoutes from "./routes/Food.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/user/",UserRoutes);
app.use("/api/food/",FoodRoutes);
// error handle
app.use((err,req,res,next)=>{
    const status=err.status || 500 ;
    const message=err.message || "Something went Wrong"
    return res.status(status).json({
        success:false,
        status,
        message
    })
})


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello Gfg",
  });
});
const connectDB = () => {
    mongoose.set("strictQuery",true)
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log("connected to MongoDB"))
    .catch((err)=>{
        console.log(err.message)
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
