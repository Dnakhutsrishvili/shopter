import { Router } from "express";
import userRoutes from "./userRoutes.ts";
import adminRoutes from "./adminRoutes.ts";

const router = Router();

router.use("/user", userRoutes);
router.use("/admin", adminRoutes);

export default router;
