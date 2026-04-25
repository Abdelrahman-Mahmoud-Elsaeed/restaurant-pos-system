import mongoose from "mongoose";
import {MONGO_URI} from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1);
  }
};
export const disconnectDB = async () => {
  try {
    const conn = await mongoose.disconnect();
    console.log(`MongoDB disconnect`);
  } catch (error) {
    console.error(" MongoDB disconnect error:", error.message);
    process.exit(1);
  }
};