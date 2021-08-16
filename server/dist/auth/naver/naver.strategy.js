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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaverStrategy = void 0;
const passport_naver_1 = require("passport-naver");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth.service");
const dotenv_1 = require("dotenv");
dotenv_1.config();
let NaverStrategy = class NaverStrategy extends passport_1.PassportStrategy(passport_naver_1.Strategy, 'naver') {
    constructor(authService) {
        super({
            clientID: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_SECRET,
            callbackURL: process.env.NODE_ENV === 'development'
                ? 'http://localhost:3060'
                : process.env.BACK_URL + '/api/auth/naver/redirect',
        });
        this.authService = authService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { email, nickname, id, profile_image } = profile._json;
        const user = {
            socialId: id,
            provider: 'naver',
            email,
            name: nickname,
            icon: profile_image,
        };
        const naverUser = await this.authService.validateSocialUser(user);
        return done(null, naverUser);
    }
};
NaverStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], NaverStrategy);
exports.NaverStrategy = NaverStrategy;
//# sourceMappingURL=naver.strategy.js.map