import type { Request, Response } from "express";

export const getProfile = (req: Request, res: Response) => {
  res.json({ message: "User profile", user: req.user });
};
