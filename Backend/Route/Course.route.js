import express from "express"
import { getCourse } from "../Controller/Course.controller"
const router=express.Router();
router.get("/", getCourse);

export default router;