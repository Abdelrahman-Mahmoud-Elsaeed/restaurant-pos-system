import authRoute  from "./routes/auth.route.js";
import productRoute  from "./routes/product.route.js";
import orderRoute  from "./routes/order.route.js";
import express from 'express';


const router = express.Router();


app.use("/auth",authRoute);
app.use("/menue",productRoute);
app.use("/order",orderRoute);


export default router