import { Router } from "express";
import { getProfile } from "../controllers/userControllers";
import { authorize } from "../middlewares/authorize";

const router = Router();

router.get("/profile", authorize("user", "admin"), getProfile);

export default router;
