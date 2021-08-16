import { Users } from 'src/entities/Users';
declare const UserSignUpDto_base: import("@nestjs/common").Type<Pick<Users, "name" | "email" | "password">>;
export declare class UserSignUpDto extends UserSignUpDto_base {
    authNum: string;
}
export {};
