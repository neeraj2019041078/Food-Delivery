import express from "express";
import cors from "cors";
import UserRoutes from "./routes/User.js";
import FoodRoutes from "./routes/Food.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/user/", UserRoutes);
app.use("/api/food/", FoodRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello Gfg",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// error handle
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went Wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

export default app;
