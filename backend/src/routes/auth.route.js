// express >> router
import express from "express";
const router = express.Router();

import {
  loginController,
  registerController,
  moveToBin,
} from "../controllers/auth.controller.js";

import asyncHandler from "../utils/asyncHandlar.js";

router.post("/signup", asyncHandler(registerController));
router.post("/login", asyncHandler(loginController));

router.patch("/delete-user/:id", asyncHandler(moveToBin));

export default router;
