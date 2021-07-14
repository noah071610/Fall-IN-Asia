enum Gender {
  "male",
  "female",
}

export interface IUser {
  id?: number;
  rate?: number;
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

export interface IClubPostForm {
  title: string;
  content: string;
  groupId?: number;
  key_name?: string;
  userId?: number;
  postId?: number;
}

export interface IStudyPostForm {
  title: string;
  content: string;
  type?: string;
  area?: string;
  userId?: number;
  postId?: number;
}

export interface IImages {
  id?: number;
  src: string;
}

export interface IComment {
  id: number;
  content: string;
  user: IUser;
}

export interface IMarketPost {
  id: number;
  images: IImages[];
  keyword: string;
  area: number;
  title: string;
  content: number;
  user: IUser;
}

export interface IStudyPost {
  id: number;
  images?: IImages[];
  type: string;
  area: number;
  title: string;
  content: string;
  leaderUser: IUser;
}

export interface IGroupScore {
  talented: number;
  handsome: number;
  pretty: number;
  cute: number;
  beautiful: number;
}

export interface IGroup {
  id: number;
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
  likedUser?: any[];
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
