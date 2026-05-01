// express >> router 
import express from 'express';
const router = express.Router();

// require controllers 
import { 
    loginController, 
    registerController, 
    moveToBin 
} from "../controllers/auth.controller.js";

 router.post("/signup", registerController);
router.post("/login", loginController);

 router.patch("/delete-user/:id", moveToBin);

export default router;