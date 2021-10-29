import { AxiosRequestConfig } from "axios";

const continent = {
  northEastAsia: "northEastAsia",
  southEastAsia: "southEastAsia",
  southAsia: "southAsia",
} as const;
type EContinent = typeof continent[keyof typeof continent];

const momentType = {
  community: "community",
  travelInfo: "travelInfo",
  scam: "scam",
  accompany: "accompany",
} as const;
type EMomentType = typeof momentType[keyof typeof momentType];

const articleType = {
  travelNews: "travelNews",
  trand: "trand",
  shopping: "shopping",
  experience: "experience",
  event: "event",
} as const;
type EArticleType = typeof articleType[keyof typeof articleType];

export interface ICoordinate {
  latitude: number;
  longitude: number;
}

export interface DataResponse {
  data: any;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig;
  request?: any;
}

export interface IUser {
  id: number;
  name: string;
  icon: string;
  moments: IMoment[];
  stories: IStory[];
  notices: INotice[];
  likeMoment: ILikeMoment[];
  likeComment: ILikeComment[];
  likeStory: ILikeStory[];
  followers: IFollow[];
  followings: IFollow[];
  introduce: string;
}

export interface IUserInfo extends IUser {
  createAt: Date;
  comments: IComment[];
}

export interface IMoment {
  id: number;
  code: string;
  hit: number;
  type: EMomentType;
  content: string;
  createdAt: Date;
  user: IUser;
  images: IImage[];
  country: ICountry;
  comments: IComment[];
  notices: INotice[];
  likedUser: IUser[];
}

export interface IStory {
  id: number;
  code: string;
  hit: number;
  title: string;
  content: string;
  region: string;
  lat: number;
  lng: number;
  thumbnail: string;
  createdAt: Date;
  user: IUser;
  country: ICountry;
  comments: IComment[];
  notices: INotice[];
  likedUser: IUser[];
}

export interface IArticle {
  id: number;
  type: EArticleType;
  label: string;
  ranking: number;
  region: string;
  title: string;
  content: string;
  lat: number;
  lng: number;
  user: IUser;
  thumbnail: string;
  createdAt: Date;
  country: ICountry;
}

export interface INotice {
  id: number;
  header: string;
  userId: number | null;
  momentId: number | null;
  storyId: number | null;
  createdAt: Date;
  readAt: Date | null;
  code: string;
  content: string;
}

export interface IVisitCountry extends ICoordinate {
  id: number;
  userId: number;
  countryCode: string;
  review: string;
  images: IImage[];
}

export interface ILikeMoment {
  id: number;
  userId: number;
  momentId: number;
}

export interface ILikeComment {
  id: number;
  userId: number;
  commentId: number;
}

export interface IFollow {
  id: number;
  followingId: number;
  followerId: number;
  follower: IUser;
  following: IUser;
}

export interface ILikeStory {
  id: number;
  userId: number;
  storyPostId: number;
}

export interface ICountry {
  id: number;
  code: string;
  name: string;
  continent: EContinent;
  image_src: string;
  flag_src: string;
  moments: IMoment[];
  stories: IStory[];
}

export interface IImage {
  id: number;
  image_src: string;
}

export interface IComment {
  id: number;
  content: string;
  user: IUser;
  createdAt: Date;
  post: IMoment;
  subComments: ISubComment[];
  notices: INotice[];
  likedUser: ILikeComment[];
}

export interface ISubComment {
  id: number;
  content: string;
  user: IUser;
  createdAt: Date;
  comment?: IComment;
}

export interface IUserRequestForm {
  email: string;
  name?: string;
  password?: string;
  authNum?: number;
}

export interface IMomentRequestForm {
  code: string;
  content: string;
  type: EMomentType;
}

export interface ICommentRequestForm {
  content: string;
  momentId?: number;
  commentId?: number;
}

export interface IPrevImage {
  uid: string;
  name: string;
  status: string;
  url: string;
}
