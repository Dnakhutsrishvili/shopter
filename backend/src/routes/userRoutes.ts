import { Router } from "express";
import { getProfile } from "../controllers/userControllers.ts";
import { authorize } from "../middlewares/authorize.ts";

const router = Router();

router.get("/profile", authorize("user", "admin"), getProfile);

export default router;
