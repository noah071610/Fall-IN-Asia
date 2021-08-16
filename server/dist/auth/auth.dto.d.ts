import { Users } from 'src/entities/Users';
declare const SocialProfileDto_base: import("@nestjs/common").Type<Pick<Users, "name" | "email" | "socialId" | "provider" | "icon">>;
export declare class SocialProfileDto extends SocialProfileDto_base {
}
export {};
