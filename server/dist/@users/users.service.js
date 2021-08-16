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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const Users_1 = require("../entities/Users");
const typeorm_1 = require("typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
const typeorm_2 = require("@nestjs/typeorm");
const Follow_1 = require("../entities/Follow");
const Notices_1 = require("../entities/Notices");
const AuthNum_1 = require("../entities/AuthNum");
let UsersService = class UsersService {
    constructor(UserRepository, FollowRepository, NoticesRepository, AuthNumRepository) {
        this.UserRepository = UserRepository;
        this.FollowRepository = FollowRepository;
        this.NoticesRepository = NoticesRepository;
        this.AuthNumRepository = AuthNumRepository;
    }
    async findUserInfoByEmail(email) {
        const user = await this.UserRepository.createQueryBuilder('users')
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
            .where('users.email= :email', { email })
            .getOne();
        if (!user) {
            throw new common_1.UnauthorizedException('유저정보가 없습니다. 다시한번 확인해주세요.');
        }
        return user;
    }
    async getUserInfoById(userId) {
        const user = await this.UserRepository.createQueryBuilder('users')
            .addSelect([
            'stories.code',
            'stories.title',
            'stories.lat',
            'stories.lng',
            'stories.region',
            'stories.thumbnail',
            'stories.id',
            'comments.id',
            'likedUser.id',
            's_country.code',
            's_country.flag_src',
            's_country.name',
            's_user.name',
            's_user.icon',
            's_user.id',
            'm_country.code',
            'm_country.name',
            'following.icon',
            'following.name',
            'follower.icon',
            'follower.name',
        ])
            .leftJoin('users.stories', 'stories')
            .leftJoin('stories.comments', 'comments')
            .leftJoin('stories.likedUser', 'likedUser')
            .leftJoin('stories.country', 's_country')
            .leftJoin('stories.user', 's_user')
            .leftJoinAndSelect('users.moments', 'moments')
            .leftJoin('moments.country', 'm_country')
            .leftJoinAndSelect('users.notices', 'notices')
            .leftJoinAndSelect('users.followings', 'followings')
            .leftJoinAndSelect('users.followers', 'followers')
            .leftJoin('followings.following', 'following')
            .leftJoin('followers.follower', 'follower')
            .where('users.id= :id', { id: userId })
            .getOne();
        if (!user) {
            throw new common_1.NotFoundException('유저정보가 없습니다. 다시한번 확인해주세요.');
        }
        return user;
    }
    async signUp(email, name, password, authNum) {
        if (!email) {
            throw new common_1.BadRequestException('이메일을 작성해주세요.');
        }
        if (!name) {
            throw new common_1.BadRequestException('이름을 입력해주세요.');
        }
        if (!password) {
            throw new common_1.BadRequestException('비밀번호를 작성해주세요.');
        }
        const user = await this.UserRepository.findOne({ where: { email } });
        if (user) {
            throw new common_1.UnauthorizedException('누군가 사용하고있는 이메일입니다.');
        }
        const emailAuthNum = await this.AuthNumRepository.findOne({
            where: { email, authNum: parseInt(authNum) },
        });
        if (!emailAuthNum) {
            throw new common_1.BadRequestException('이메일과 인증번호가 다릅니다. 다시한번 확인해주세요.');
        }
        else {
            await this.AuthNumRepository.delete(emailAuthNum);
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 12);
        await this.UserRepository.save({
            email,
            name,
            password: hashedPassword,
            introduce: `안녕하세요. ${name} 입니다.`,
        });
        return true;
    }
    async addUserIcon(userId, file) {
        const user = await this.UserRepository.findOne({
            where: { id: userId },
        });
        user.icon = file.location.replace(/\/original\//, '/thumb/');
        return await this.UserRepository.save(user);
    }
    async deleteUserIcon(userId) {
        const user = await this.UserRepository.findOne({
            where: { id: userId },
        });
        user.icon =
            'https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png';
        return await this.UserRepository.save(user);
    }
    async changeUserInfo(userId, form) {
        const user = await this.UserRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('유저를 찾지 못했습니다.');
        }
        user.name = form.userName;
        user.introduce = form.introduce;
        return await this.UserRepository.save(user);
    }
    async confirmPassword(userId, password) {
        const user = await this.UserRepository.findOne({
            select: ['id', 'icon', 'email', 'password'],
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('유저를 찾지 못했습니다.');
        }
        const result = await bcrypt_1.default.compare(password, user.password);
        if (result) {
            return true;
        }
        else {
            throw new common_1.UnauthorizedException('비밀번호가 일치하지 않습니다. 다시한번 확인해주세요.');
        }
    }
    async changeUserPassword(userId, newPassword) {
        const user = await this.UserRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('유저를 찾지 못했습니다.');
        }
        const myNewPassword = await bcrypt_1.default.hash(newPassword, 12);
        user.password = myNewPassword;
        return await this.UserRepository.save(user);
    }
    async deleteUser(userId) {
        return await this.UserRepository.delete({
            id: userId,
        });
    }
    async followUser(followingId, userId) {
        if (!followingId) {
            throw new common_1.NotFoundException('팔로우 할 유저를 찾지 못했습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const newFollower = new Follow_1.Follow();
        newFollower.followerId = userId;
        newFollower.followingId = followingId;
        return await this.FollowRepository.save(newFollower);
    }
    async unfollowUser(followingId, userId) {
        if (!followingId) {
            throw new common_1.NotFoundException('언팔로우를 할 유저를 찾지 못했습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        return await this.FollowRepository.delete({
            followingId,
            followerId: userId,
        });
    }
    async readNotice(userId) {
        const notices = await this.NoticesRepository.find({
            where: { userId },
        });
        if (!notices) {
            return true;
        }
        notices.forEach((v) => {
            if (v.readAt === null) {
                v.readAt = new Date();
            }
        });
        await this.NoticesRepository.save(notices);
        return true;
    }
    async deleteNotice(noticeId, userId) {
        return await this.NoticesRepository.delete({
            id: noticeId,
            userId: userId,
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(Users_1.Users)),
    __param(1, typeorm_2.InjectRepository(Follow_1.Follow)),
    __param(2, typeorm_2.InjectRepository(Notices_1.Notices)),
    __param(3, typeorm_2.InjectRepository(AuthNum_1.AuthNum)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map