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

const momentType = {
  관광여행: "관광 및 여행",
  유학취업: "유학 및 취업",
  구인구직: "구인구직",
  커뮤니티: "현지 커뮤니티",
} as const;
type EMomentType = typeof momentType[keyof typeof momentType];

export interface ICoordinate {
  latitude: number;
  longitude: number;
}
export interface IUser {
  id: number;
  name: string;
  icon: string;
  moments: IMoment[];
  stories: IStory[];
  comments: IComment[];
  notices: INotice[];
  likeMoment: ILikeMoment[];
  likeStory: ILikeStory[];
}

export interface IUserInfo extends IUser {
  introduce: string;
  createAt: Date;
  visited: IVisitCountry[];
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

export interface INotice {
  id: number;
  header: string;
  userId: number | null;
  momentId: number | null;
  storyPostId: number | null;
  createdAt: Date;
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
  moments?: IMoment[];
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
  password: string;
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
