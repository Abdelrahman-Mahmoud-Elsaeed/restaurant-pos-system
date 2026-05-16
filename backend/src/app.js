import express from "express";

import { connectDB, disconnectDB } from "./config/db.js";

import router from "./routes/index.route.js";

const app = express();

await connectDB();

app.use(express.json());

app.use("/api", router);

process.on("SIGINT", async () => {
  await disconnectDB();
  process.exit(0);
});

export default app;
