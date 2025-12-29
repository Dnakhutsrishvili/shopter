import mongoose, { Schema, model } from "mongoose";
import type { Address, User } from "../types/User.ts";

const AddressSchema = new Schema<Address>({
  id: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  postalCode: { type: String, required: true },
});

const UserSchema = new Schema<User>(
  {
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["guest", "user", "admin"], required: true },
    profile: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      avatarUrl: { type: String },
    },
    cartId: { type: String },
    addresses: { type: [AddressSchema], default: [] },
    preferences: {
      language: { type: String },
      currency: { type: String },
      theme: { type: String, enum: ["light", "dark"] },
    },
    isAuthenticated: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export const UserModel = model<User>("User", UserSchema);
