import { ExecutionContext } from '@nestjs/common';
declare const NaverAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class NaverAuthGuard extends NaverAuthGuard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
