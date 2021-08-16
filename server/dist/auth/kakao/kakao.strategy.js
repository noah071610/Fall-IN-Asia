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
exports.KaKaoStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const dotenv_1 = require("dotenv");
const passport_kakao_1 = require("passport-kakao");
const auth_service_1 = require("../auth.service");
dotenv_1.config();
let KaKaoStrategy = class KaKaoStrategy extends passport_1.PassportStrategy(passport_kakao_1.Strategy, 'kakao') {
    constructor(authService) {
        super({
            clientID: process.env.KAKAO_CLIENT_ID,
            clientSecret: '',
            callbackURL: process.env.NODE_ENV === 'development'
                ? 'http://localhost:3060'
                : process.env.BACK_URL + '/api/auth/kakao/redirect',
        });
        this.authService = authService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { id: socialId, username: name, _json: { properties: { profile_image }, kakao_account: { email }, }, } = profile;
        const user = {
            provider: 'kakao',
            socialId,
            email,
            name,
            icon: profile_image,
        };
        const kakaoUser = await this.authService.validateSocialUser(user);
        return done(null, kakaoUser);
    }
};
KaKaoStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], KaKaoStrategy);
exports.KaKaoStrategy = KaKaoStrategy;
//# sourceMappingURL=kakao.strategy.js.map