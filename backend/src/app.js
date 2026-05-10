import express from "express";

import { connectDB,disconnectDB } from "./config/db.js";
import router  from "./routes/index.route.js";
import productRoute  from "./routes/product.route.js";
import orderRoute  from "./routes/order.route.js";

const app = express();

await connectDB();

// middellwares 
app.use(express.json());

// routes
app.use("/api/",router);



process.on("SIGINT", async () => {
  await disconnectDB();
  process.exit(0);
});





export default app