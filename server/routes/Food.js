import express from "express";
import { addProducts,getFoodItems,getFoodById } from "../controllers/Food.js";

const router=express.Router();
// router.post("/",addProducts);
router.post("/add", addProducts);
router.get("/", getFoodItems);
router.get("/:id", getFoodById);

export default router;