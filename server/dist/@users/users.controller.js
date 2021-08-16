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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const path_1 = __importDefault(require("path"));
const local_auth_guard_1 = require("../auth/local/local-auth.guard");
const logged_in_guard_1 = require("../auth/logged-in.guard");
const not_logged_in_guard_1 = require("../auth/not-logged-in.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const users_dto_1 = require("./users.dto");
const json_respone_middleware_1 = require("../intersepter/json.respone.middleware");
const users_service_1 = require("./users.service");
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getUserInfo(req, user) {
        return user || false;
    }
    async getUserInfoById(userId) {
        return await this.usersService.getUserInfoById(userId);
    }
    async signUp(data) {
        return await this.usersService.signUp(data.email, data.name, data.password, data.authNum);
    }
    async logIn(user) {
        const fullUserInfo = await this.usersService.findUserInfoByEmail(user.email);
        return fullUserInfo;
    }
    async logOut(req, res) {
        res.clearCookie('connect.sid', { httpOnly: true });
        req.logout();
        return res.send('success');
    }
    async addUserIcon(user, file) {
        const addUserIcon = this.usersService.addUserIcon(user.id, file);
        return addUserIcon;
    }
    async deleteUserIcon(user) {
        const deleteUserIcon = this.usersService.deleteUserIcon(user.id);
        return deleteUserIcon;
    }
    async changeUserInfo(form, user) {
        return await this.usersService.changeUserInfo(user.id, form);
    }
    async changeUserPassword(req, res, form, user) {
        const cofirmedPassword = await this.usersService.confirmPassword(user.id, form.prevPassword);
        if (cofirmedPassword) {
            await this.usersService.changeUserPassword(user.id, form.newPassword);
            res.clearCookie('connect.sid', { httpOnly: true });
            req.logout();
            res.send('success');
            return true;
        }
    }
    async readNotice(user) {
        await this.usersService.readNotice(user.id);
        return await this.usersService.getUserInfoById(user.id);
    }
    async deleteNotice(noticeId, user) {
        await this.usersService.deleteNotice(noticeId, user.id);
        return await this.usersService.getUserInfoById(user.id);
    }
    async withdrawalUser(req, res, form, user) {
        const cofirmedPassword = await this.usersService.confirmPassword(user.id, form.password);
        if (cofirmedPassword) {
            await this.usersService.deleteUser(user.id);
            res.clearCookie('connect.sid', { httpOnly: true });
            req.logout();
            res.send('success');
            return true;
        }
    }
    async followUser(followingId, user) {
        return await this.usersService.followUser(followingId, user === null || user === void 0 ? void 0 : user.id);
    }
    async unfollowUser(followingId, user) {
        return await this.usersService.unfollowUser(followingId, user === null || user === void 0 ? void 0 : user.id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'get the user infomation' }),
    common_1.Get(),
    __param(0, common_1.Req()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserInfo", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'get specific user infomation for user page' }),
    common_1.Get(':userId'),
    __param(0, common_1.Param('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserInfoById", null);
__decorate([
    common_1.UseGuards(new not_logged_in_guard_1.NotLoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Sign up' }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.UserSignUpDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signUp", null);
__decorate([
    common_1.UseGuards(new local_auth_guard_1.LocalAuthGuard()),
    swagger_1.ApiOperation({ summary: 'Login' }),
    common_1.Post('logIn'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logIn", null);
__decorate([
    swagger_1.ApiCookieAuth('connect.sid'),
    swagger_1.ApiOperation({ summary: 'Logout' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('logout'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logOut", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'change user icon' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post('icon'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUserIcon", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'delete user icon' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Delete('icon'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserIcon", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'change user information' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('info'),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changeUserInfo", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'change user password' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('password'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __param(3, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changeUserPassword", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('/notice'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "readNotice", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Delete('/notice/:noticeId'),
    __param(0, common_1.Param('noticeId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteNotice", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'withdrawal user' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('withdrawal'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __param(3, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "withdrawalUser", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'follow user by followingId' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('follow/:followingId'),
    __param(0, common_1.Param('followingId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "followUser", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'follow user by followingId' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('unfollow/:followingId'),
    __param(0, common_1.Param('followingId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "unfollowUser", null);
UsersController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('User'),
    common_1.Controller('/api/user'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map