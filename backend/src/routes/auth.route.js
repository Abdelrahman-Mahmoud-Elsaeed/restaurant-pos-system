import express from 'express';
const router = express.Router();
import{ loginController,registerController} from "../controllers/auth.controller.js";

router.post("/signup", registerController);
router.post("/login" , loginController);

export default router