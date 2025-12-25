import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./connectDb.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
async function start() {
  await connectDB();

  app.use(express.json());

  app.get("/", (_req: Request, res: Response) => {
    res.status(200).send("Hello from TypeScript Server!");
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

start();
