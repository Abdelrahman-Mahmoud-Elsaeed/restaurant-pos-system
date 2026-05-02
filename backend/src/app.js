import express from "express";
import { connectDB,disconnectDB } from "./config/db.js";
import authRoute from "./routes/auth.route.js";

const app = express();


app.use(express.json());

await connectDB();

 
app.use("/api/auth",authRoute);

process.on("SIGINT", async () => {
  await disconnectDB();
  process.exit(0);
});


export default app

// { "name":"hager sherif",
// "mobile":1234567890,
// "email":"hager12@gmail.com",
// "password":"123456789" }
// {
// "email":"hager12@gmail.com",
// "password":"123456789" 
// }