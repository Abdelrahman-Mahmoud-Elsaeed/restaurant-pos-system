// express >> router 
import express from 'express';
const router = express.Router();

// require controllers 
import { 
    loginController, 
    registerController, 
    moveToBin 
} from "../controllers/auth.controller.js";

import { authMiddelware } from "../middlewares/auth.middleware.js"
import {premitMiddelware} from "../middlewares/premitMiddelware.js"

 router.post("/signup", registerController);
router.post("/login",authMiddelware,premitMiddelware("manager"), loginController);

 router.patch("/delete-user/:id", moveToBin);

export default router;