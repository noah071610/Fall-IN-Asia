import { MailerService } from '@nestjs-modules/mailer';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly AuthService;
    private readonly MailerService;
    constructor(AuthService: AuthService, MailerService: MailerService);
    sendEmailAuthNumber(data: any): Promise<boolean>;
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any, res: any): Promise<void>;
    kakaoAuth(req: any): Promise<void>;
    kakaoAuthRedirect(req: any, res: any): Promise<void>;
    naverAuth(req: any): Promise<void>;
    naverAuthRedirect(req: any, res: any): Promise<void>;
}
