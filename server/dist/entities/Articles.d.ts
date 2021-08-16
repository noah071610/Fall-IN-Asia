import { Countries } from './Countries';
import { Images } from './Images';
import { Users } from './Users';
export declare class Articles {
    id: number;
    ranking: number;
    label: string;
    type: '관광뉴스' | '트렌드' | '쇼핑' | '이색체험' | '이벤트';
    region: string;
    lat: number;
    lng: number;
    thumbnail: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    images: Images[];
    country: Countries;
    user: Users;
}
