const continent = {
  아시아: "아시아",
  유라시아: "유라시아",
  중동: "중동",
  아프리카: "아프리카",
  북아메리카: "북아메리카",
  남아메리카: "남아메리카",
  유럽: "유럽",
  오세아니아: "오세아니아",
} as const;
type EContinent = typeof continent[keyof typeof continent];
const mainPostType = {
  관광지: "관광지",
  음식: "음식",
  숙박: "숙박",
  사기경보: "사기경보",
} as const;
type EMainPostType = typeof mainPostType[keyof typeof mainPostType];

export interface IUser {
  id: number;
  googleId: number;
  email: string;
  name: string;
  icon: string;
  admin?: boolean;
}

export interface IMainPost {
  id: number;
  code: string;
  hit: number;
  type: EMainPostType;
  content: string;
  createdAt: Date;
  user: IUser;
  images: IImage[];
  country: ICountry;
  comments: IComment[];
  announcements?: IAnnouncement[];
  likedUser?: IUser[];
}

export interface IAnnouncement {
  id: number;
  userId: number;
  mainPostId: number;
  storyPostId: number;
}

export interface ICountry {
  id: number;
  code: string;
  name: string;
  continent: EContinent;
  image_src: string;
  flag_src: string;
  mainPosts?: IMainPost[];
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
  post: IMainPost;
  subComments: ISubComment[];
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
  name: string;
  password: string;
}

export interface IMainPostRequestForm {
  code: string;
  content: string;
  type: EMainPostType;
}

export interface ICommentRequestForm {
  content: string;
  mainPostId?: number;
  commentId?: number;
}

export interface IMarketPost {
  id: number;
  images: IImage[];
  keyword: string;
  area: number;
  title: string;
  content: number;
  user: IUser;
}
