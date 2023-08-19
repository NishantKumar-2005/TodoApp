import express from "express";
import {UpdateMyTask, deleteMyTask, getMyTask, newtask } from "../controllers/task.js";
import { isAnthenticated } from "../middleware/isAthenticated.js";

const router = express.Router();
export default router;

router.post("/taskadd",isAnthenticated,newtask);
router.get("/my",isAnthenticated,getMyTask);
router.route("/:id").put(isAnthenticated,UpdateMyTask).delete(isAnthenticated,deleteMyTask);