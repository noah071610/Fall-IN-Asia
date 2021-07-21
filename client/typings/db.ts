enum Gender {
  "male",
  "female",
}
const continent = {
  동북아시아: "동북아시아",
  동남아시아: "동남아시아",
  유라시아: "유라시아",
  서아시아: "서아시아",
  중동: "중동",
  북미: "북미",
  남미: "남미",
  유럽: "유럽",
  아프리카: "아프리카",
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
  country: ICountry;
  comments?: IComment[];
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

export interface IImages {
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

export interface IStudyPostForm {
  title: string;
  content: string;
  type?: string;
  area?: string;
  userId?: number;
  postId?: number;
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
  area: string;
  title: string;
  content: string;
  leaderUser: IUser;
}

export interface IGroupVote {
  userId: number;
  groupId: number;
  votedStyle: string;
}

export interface IGroupScore extends IGroup {
  talented: number;
  handsome: number;
  pretty: number;
  cute: number;
  beautiful: number;
  votedUser?: IGroupVote;
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
