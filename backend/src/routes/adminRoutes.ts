import { Router } from "express";
import { getAdminDashboard } from "../controllers/adminControllers.ts";
import { authorize } from "../middlewares/authorize.ts";

const router = Router();

router.get("/dashboard", authorize("admin"), getAdminDashboard);

export default router;
