import { Store } from "@reduxjs/toolkit";

export interface IUser {
  id: number;
  googleId?: number;
  email: string;
  name: string;
  icon?: string;
  admin?: boolean;
}

export interface IForm {
  email: string;
  name: string;
  password: string;
}
