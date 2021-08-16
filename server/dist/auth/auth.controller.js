"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const auth_service_1 = require("./auth.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const json_respone_middleware_1 = require("../intersepter/json.respone.middleware");
const dotenv_1 = __importDefault(require("dotenv"));
const not_logged_in_guard_1 = require("./not-logged-in.guard");
const google_auth_guard_1 = require("./google/google-auth.guard");
const kakao_auth_guard_1 = require("./kakao/kakao-auth.guard");
const naver_auth_guard_1 = require("./naver/naver-auth.guard");
dotenv_1.default.config();
const client_url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.CLIENT_URL;
let AuthController = class AuthController {
    constructor(AuthService, MailerService) {
        this.AuthService = AuthService;
        this.MailerService = MailerService;
    }
    async sendEmailAuthNumber(data) {
        const authNum = await this.AuthService.checkPossibleEmail(data.email);
        this.MailerService.sendMail({
            to: data.email,
            from: process.env.EMAIL_ID,
            subject: 'Fall IN Asia 이메일 인증 요청 메일입니다.',
            html: `<p>안녕하세요. Fall IN Asia 입니다. 인증번호를 보내드립니다. 인증번호를 입력하고 회원가입을 진행해주세요</p><br/><p>인증번호 : <b>${authNum}</b></p>`,
        });
        return true;
    }
    async googleAuth(req) { }
    async googleAuthRedirect(req, res) {
        res.redirect(client_url);
    }
    async kakaoAuth(req) { }
    async kakaoAuthRedirect(req, res) {
        res.redirect(client_url);
    }
    async naverAuth(req) { }
    async naverAuthRedirect(req, res) {
        res.redirect(client_url);
    }
};
__decorate([
    common_1.UseGuards(new not_logged_in_guard_1.NotLoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'send auth number for signup' }),
    common_1.Post(`email`),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendEmailAuthNumber", null);
__decorate([
    common_1.Get('google'),
    swagger_1.ApiOperation({ summary: 'try google login ' }),
    common_1.UseGuards(new google_auth_guard_1.GoogleAuthGuard()),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    common_1.Get('google/redirect'),
    swagger_1.ApiOperation({ summary: 'goolge login redirect after auth' }),
    common_1.UseGuards(new google_auth_guard_1.GoogleAuthGuard()),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    common_1.Get('kakao'),
    swagger_1.ApiOperation({ summary: 'try kakao login ' }),
    common_1.UseGuards(new kakao_auth_guard_1.KakaoAuthGuard()),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "kakaoAuth", null);
__decorate([
    common_1.Get('kakao/redirect'),
    swagger_1.ApiOperation({ summary: 'kakao login redirect after auth' }),
    common_1.UseGuards(new kakao_auth_guard_1.KakaoAuthGuard()),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "kakaoAuthRedirect", null);
__decorate([
    common_1.Get('naver'),
    swagger_1.ApiOperation({ summary: 'try naver login ' }),
    common_1.UseGuards(new naver_auth_guard_1.NaverAuthGuard()),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "naverAuth", null);
__decorate([
    common_1.Get('naver/redirect'),
    swagger_1.ApiOperation({ summary: 'naver login redirect after auth' }),
    common_1.UseGuards(new naver_auth_guard_1.NaverAuthGuard()),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "naverAuthRedirect", null);
AuthController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Auth'),
    common_1.Controller('/api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        mailer_1.MailerService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map