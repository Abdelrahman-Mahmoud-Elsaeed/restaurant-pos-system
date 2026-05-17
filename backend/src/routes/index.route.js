import authRoute  from "./auth.route.js";
import productRoute  from "./product.route.js";
import orderRoute  from "./order.route.js";
import express from 'express';


const router = express.Router();


router.use("/auth",authRoute);
router.use("/menue",productRoute);
router.use("/order",orderRoute);


export default router