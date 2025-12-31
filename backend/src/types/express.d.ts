declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export interface UserPayload {
  id: string;
  role: "guest" | "user" | "admin";
  email?: string;
}
