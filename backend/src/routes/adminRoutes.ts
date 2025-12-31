import { Router } from "express";
import { getAdminDashboard } from "../controllers/adminControllers";
import { authorize } from "../middlewares/authorize";

const router = Router();

router.get("/dashboard", authorize("admin"), getAdminDashboard);

export default router;
