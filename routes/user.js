import express from "express";
import {getAllUsers, getUserBYId, login, logout, newUser } from "../controllers/user.js";
import { isAnthenticated } from "../middleware/isAthenticated.js";

const router = express.Router();

export default router;


router.get("/all",getAllUsers);

router.get("/usersid",isAnthenticated,getUserBYId);

router.post("/new",newUser);

router.post("/login",login);
router.get("/logout",logout);
