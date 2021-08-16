import { Articles } from './Articles';
import { Moments } from './Moments';
import { Stories } from './Stories';
export declare class Images {
    id: number;
    image_src: string;
    createdAt: Date;
    updatedAt: Date;
    story: Stories;
    moment: Moments;
    article: Articles;
}
