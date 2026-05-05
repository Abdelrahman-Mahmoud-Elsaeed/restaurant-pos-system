import express from "express";

import { connectDB,disconnectDB } from "./config/db.js";
import authRoute  from "./routes/auth.route.js";
import {getAllproducts, CreateProduct ,getproductbyid, UpdateProduct , DeleteProduct} from "./controllers/product.controller.js"
import {getAllorders,getorderbyid,UpdateOrder,CreateOrder,DeleteOrder} from "./controllers/order.controller.js"

const app = express();

await connectDB();

// middellwares 
app.use(express.json());

// routes
app.use("/api/auth",authRoute);


process.on("SIGINT", async () => {
  await disconnectDB();
  process.exit(0);
});


app.get('/api/menue/',getAllproducts);
app.get('/api/menue/:id',getproductbyid);
app.post('/api/menue/',CreateProduct);
app.patch('/api/menue/:id',UpdateProduct);
app.delete('/api/menue/:id',DeleteProduct);

app.get('/api/order/',getAllorders);
app.get('/api/order/:id',getorderbyid);
app.post('/api/order/',CreateOrder);
app.patch('/api/order/:id',UpdateOrder);
app.delete('/api/order/:id',DeleteOrder);

export default app