import { Moments } from 'src/entities/Moments';
declare const MomentCreateRequestDto_base: import("@nestjs/common").Type<Pick<Moments, "content" | "type" | "code">>;
export declare class MomentCreateRequestDto extends MomentCreateRequestDto_base {
}
export declare class MomentModifyRequestDto extends MomentCreateRequestDto {
    momentId: string;
    prevImage?: string[];
}
export {};
