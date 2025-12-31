import { Request, Response } from "express";

export const getAdminDashboard = (req: Request, res: Response) => {
  res.json({ message: "Admin dashboard", user: req.user });
};
