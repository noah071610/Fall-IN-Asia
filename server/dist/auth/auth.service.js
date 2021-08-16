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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
const AuthNum_1 = require("../entities/AuthNum");
const typeorm_2 = require("typeorm");
const Users_1 = require("../entities/Users");
let AuthService = class AuthService {
    constructor(UserRepository, AuthNumRepository) {
        this.UserRepository = UserRepository;
        this.AuthNumRepository = AuthNumRepository;
    }
    async validateUser(email, password) {
        const user = await this.UserRepository.findOne({
            where: { email },
            select: ['id', 'icon', 'email', 'password'],
        });
        if (!user) {
            throw new common_1.UnauthorizedException('유효하지 않은 이메일입니다.');
        }
        const result = await bcrypt_1.default.compare(password, user.password);
        if (result) {
            const { password } = user, userWithoutPassword = __rest(user, ["password"]);
            return userWithoutPassword;
        }
        else {
            throw new common_1.UnauthorizedException('비밀번호가 틀렸습니다.');
        }
    }
    async validateSocialUser(profile) {
        const user = await this.UserRepository.findOne({
            where: [{ email: profile.email }, { socialId: profile.socialId }],
            select: ['id', 'icon'],
        });
        if (!user) {
            const newUser = new Users_1.Users();
            newUser.socialId = profile.socialId;
            newUser.provider = profile.provider;
            newUser.email = profile.email;
            newUser.icon = profile.icon;
            newUser.name = profile.name;
            newUser.introduce = `안녕하세요 ${profile.name}입니다.`;
            await this.UserRepository.save(newUser);
            return newUser;
        }
        return user;
    }
    async checkPossibleEmail(email) {
        if (!email) {
            throw new common_1.BadRequestException('이메일을 작성해주세요.');
        }
        const user = await this.UserRepository.findOne({ where: { email: email } });
        if (user) {
            throw new common_1.UnauthorizedException('누군가 사용하고있는 이메일입니다.');
        }
        const generateRandom = function (min, max) {
            const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
            return ranNum;
        };
        const authNum = generateRandom(111111, 999999);
        await this.AuthNumRepository.save({
            email,
            authNum,
        });
        return authNum;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Users_1.Users)),
    __param(1, typeorm_1.InjectRepository(AuthNum_1.AuthNum)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map