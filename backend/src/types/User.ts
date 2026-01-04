export interface Address {
  city: string;
  street: string;
  postalCode: string;
}
export interface User {
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
