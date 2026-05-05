import express from "express";

import { connectDB,disconnectDB } from "./config/db.js";
import authRoute  from "./routes/auth.route.js";
import productRoute  from "./routes/product.route.js";
import orderRoute  from "./routes/order.route.js";
import {getAllproducts, CreateProduct ,getproductbyid, UpdateProduct , DeleteProduct} from "./controllers/product.controller.js"
import {getAllorders,getorderbyid,UpdateOrder,CreateOrder,DeleteOrder} from "./controllers/order.controller.js"

const app = express();

await connectDB();

// middellwares 
app.use(express.json());

// routes
app.use("/api/auth",authRoute);
app.use("/api/menue",productRoute);
app.use("/api/order",orderRoute);


process.on("SIGINT", async () => {
  await disconnectDB();
  process.exit(0);
});





export default app