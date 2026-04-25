import express from "express";
import { connectDB,disconnectDB } from "./config/db.js";

const app = express();

await connectDB();



process.on("SIGINT", async () => {
  await disconnectDB();
  process.exit(0);
});


export default app