import { Moments } from './Moments';
import { Articles } from './Articles';
import { Stories } from './Stories';
export declare class Countries {
    id: number;
    code: string;
    name: string;
    continent: '동북아시아' | '동남아시아' | '남아시아';
    image_src: string;
    flag_src: string;
    createdAt: Date;
    updatedAt: Date;
    moments: Moments[];
    articles: Articles[];
    stories: Stories[];
}
