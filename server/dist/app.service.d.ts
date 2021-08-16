import { Repository } from 'typeorm';
import { Moments } from './entities/Moments';
import { Stories } from './entities/Stories';
export declare class AppService {
    private MomentsRepository;
    private StoriesRepository;
    constructor(MomentsRepository: Repository<Moments>, StoriesRepository: Repository<Stories>);
    welcomeFallInAsia(): string;
    getSearchPosts(searchWord: string): Promise<{
        searchWord: string;
        moments: Moments[];
        stories: Stories[];
    }>;
}
