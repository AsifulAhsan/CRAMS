import express from "express"
import { getCourse } from "../Controller/Course.controller.js"
const router=express.Router();
router.get("/", getCourse);

export default router;