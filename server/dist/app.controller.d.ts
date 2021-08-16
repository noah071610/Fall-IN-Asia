import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getSearchPosts(searchWord: string): Promise<{
        searchWord: string;
        moments: import("./entities/Moments").Moments[];
        stories: import("./entities/Stories").Stories[];
    }>;
}
