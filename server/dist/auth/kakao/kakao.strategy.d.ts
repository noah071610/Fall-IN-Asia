import { Strategy } from 'passport-kakao';
import { VerifyFunction } from 'passport-local';
import { AuthService } from '../auth.service';
declare const KaKaoStrategy_base: new (...args: any[]) => Strategy;
export declare class KaKaoStrategy extends KaKaoStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<VerifyFunction>;
}
export {};
