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

  // app.use("/api", router);

  app.get("/users", async (req, res) => {
    try {
      const users = await UserModel.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "error" });
    }
  });

  app.post("/users", async (req, res) => {
    const errors = validateCreateUser(req.body);

    if (errors.length > 0) {
      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }

    try {
      const user = await UserModel.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "User creation failed" });
    }
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

start();
