import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDb.ts";
import { UserModel } from "./models/User.ts";
import { validateCreateUser } from "./validators/userValidator.ts";
import { authenticate } from "./middlewares/authenticate.ts";
import router from "./routes/index.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();

  app.use(express.json());

  // app.use(authenticate);

  app.use("/api", router);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

start();
