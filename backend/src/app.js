import express from "express";
import { connectDB,disconnectDB } from "./config/db.js";

const app = express();

await connectDB();

// middellwares 
app.use(express.json());

// routes
const authRoute = require("./routes/auth.route.js");
app.use("/api/auth",authRoute);


process.on("SIGINT", async () => {
  await disconnectDB();
  process.exit(0);
});


export default app