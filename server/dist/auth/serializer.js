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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializer = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Users_1 = require("../entities/Users");
const auth_service_1 = require("./auth.service");
let Serializer = class Serializer extends passport_1.PassportSerializer {
    constructor(authService, usersRepository) {
        super();
        this.authService = authService;
        this.usersRepository = usersRepository;
    }
    serializeUser(user, done) {
        done(null, user.id);
    }
    async deserializeUser(userId, done) {
        return await this.usersRepository
            .createQueryBuilder('users')
            .addSelect([
            'likeComment.commentId',
            'likeMoment.momentId',
            'likeStory.storyId',
        ])
            .leftJoin('users.likeStory', 'likeStory')
            .leftJoin('users.likeMoment', 'likeMoment')
            .leftJoin('users.likeComment', 'likeComment')
            .leftJoinAndSelect('users.notices', 'notices')
            .leftJoinAndSelect('users.followings', 'followings')
            .where('users.id = :userId', { userId: +userId })
            .getOne()
            .then((user) => {
            done(null, user);
        })
            .catch((error) => done(error));
    }
};
Serializer = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(Users_1.Users)),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        typeorm_2.Repository])
], Serializer);
exports.Serializer = Serializer;
//# sourceMappingURL=serializer.js.map