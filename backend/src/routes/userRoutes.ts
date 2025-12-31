import { Router } from "express";
import {
  createUser,
  getProfile,
  getUsers,
  deleteUser,
  loginUser,
} from "../controllers/userControllers.ts";
import { authorize } from "../middlewares/authorize.ts";

const router = Router();

router.get("/:id", getProfile);
router.get("/", getUsers);
router.post("/", createUser);
router.post("/login", loginUser);
router.delete("/:id", deleteUser);

export default router;
