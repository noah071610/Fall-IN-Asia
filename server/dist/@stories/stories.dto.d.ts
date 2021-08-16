import { Stories } from 'src/entities/Stories';
declare const StoryCreateDto_base: import("@nestjs/common").Type<Pick<Stories, "content" | "title" | "region" | "lat" | "lng" | "code">>;
export declare class StoryCreateDto extends StoryCreateDto_base {
}
export declare class StoryEditDto extends StoryCreateDto {
    storyId: string;
}
export {};
