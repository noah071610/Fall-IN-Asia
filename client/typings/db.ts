import { Store } from "@reduxjs/toolkit";

export interface IUser {
  id: number;
  googleId?: number;
  email: string;
  name: string;
  icon?: string;
  admin?: boolean;
}

export interface ISignUpForm {
  email: string;
  name: string;
  password: string;
}

export interface IPostForm {
  title: string;
  content: string;
  club: string;
  userId: number;
  hit?: number;
  postId?: number;
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
  content: string;
  UserId: IUser;
  createdAt: string;
}

export interface ITopClubPost {
  name: string;
  club: string;
  posts: IClubPost[];
}
