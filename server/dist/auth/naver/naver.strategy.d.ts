import { Strategy } from 'passport-naver';
import { AuthService } from '../auth.service';
declare const NaverStrategy_base: new (...args: any[]) => Strategy;
export declare class NaverStrategy extends NaverStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any>;
}
export {};
