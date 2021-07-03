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

enum Gender {
  "male",
  "female",
}

export interface IGroup {
  name: string;
  group: string;
  gender: Gender;
  number: number;
  image: string;
  isNew: boolean;
}

export interface IClubPost {
  id: number;
  hit: number;
  club: string;
  title: string;
  content: Gender;
  userId: number;
}
