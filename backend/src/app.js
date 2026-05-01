import express from "express";

import { connectDB,disconnectDB } from "./config/db.js";
import authRoute  from "./routes/auth.route.js";

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


export default app