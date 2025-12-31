export interface Address {
  id: string;
  city: string;
  street: string;
  postalCode: string;
}
export interface User {
  id: string;
  email: string;
  password: string;
  role: "guest" | "user" | "admin";

  profile: {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
  };

  cartId?: string;

  addresses?: Address[];

  preferences?: {
    language: string;
    currency: string;
    theme: "light" | "dark";
  };

  isAuthenticated: boolean;
}
