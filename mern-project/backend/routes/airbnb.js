import express from "express";
import { getAirbnb, createAirbnb } from "../controllers/airbnb.js";
import airbnb from "../models/airbnb.js";

const router = express.Router();

router.get("/", getAirbnb);
router.post("/", createAirbnb);

export default router;
