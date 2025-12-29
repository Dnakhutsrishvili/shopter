import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_CONN_STRING as string);
    console.log("✅ MongoDB connected (mongoose)");
  } catch (error) {
    console.error("❌ MongoDB connection error", error);
    process.exit(1);
  }
}
