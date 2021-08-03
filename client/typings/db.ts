const continent = {
  동북아시아: "동북아시아",
  동남아시아: "동남아시아",
  남아시아: "남아시아",
} as const;
type EContinent = typeof continent[keyof typeof continent];

const momentType = {
  커뮤니티: "한인 커뮤니티",
  여행정보: "여행정보 공유",
  사기경보: "사기 경보",
  동행자모집: "동행자 모집",
} as const;
type EMomentType = typeof momentType[keyof typeof momentType];

const articleType = {
  관광뉴스: "관광뉴스",
  트렌드: "트렌드",
  쇼핑: "쇼핑",
  이색체험: "이색체험",
  이벤트: "이벤트",
} as const;
type EArticleType = typeof articleType[keyof typeof articleType];

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
  notices: INotice[];
  likeMoment: ILikeMoment[];
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
  region: number;
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
