export interface IUser {
  id?: number;
  googleId?: number;
  email?: string;
  name: string;
  icon?: string;
  admin?: boolean;
}

export interface ISignUpForm {
  email: string;
  name: string;
  password: string;
}

export interface IGalleryPost {
  id: number;
  title: string;
  image: string;
  user: IUser;
}

export interface IPostForm {
  title: string;
  content: string;
  groupId: number;
  key_name: string;
  userId: number;
  hit?: number;
  postId?: number;
}

enum Gender {
  "male",
  "female",
}

export interface IGroup {
  group_name: string;
  key_name: string;
  gender: Gender;
  number: number;
  image: string;
  isNew: boolean;
}

export interface IGroupScore extends IGroup {
  goodwell: number;
  handsome: number;
  pretty: number;
  cute: number;
  beautiful: number;
}

export interface IClubPost {
  id: number;
  hit: number;
  club: string;
  title: string;
  content: string;
  user: IUser;
  group: IGroup;
  createdAt: string;
}

export interface ITopClubPost {
  posts_id: number;
  posts_title: string;
  users_name: string;
}

export interface ITopClubPosts {
  group_name: string;
  key_name: string;
  posts: ITopClubPost[];
}
