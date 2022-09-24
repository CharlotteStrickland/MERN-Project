import express from "express";
import { getAirbnb } from "../controllers/airbnb.js";

const router = express.Router();

router.get("/", getAirbnb);

export default router;
