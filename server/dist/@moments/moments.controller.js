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
exports.MomentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const json_respone_middleware_1 = require("../intersepter/json.respone.middleware");
const logged_in_guard_1 = require("../auth/logged-in.guard");
const moments_service_1 = require("./moments.service");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = __importDefault(require("path"));
const user_decorator_1 = require("../decorators/user.decorator");
const moments_dto_1 = require("./moments.dto");
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let MomentsController = class MomentsController {
    constructor(MomentsService) {
        this.MomentsService = MomentsService;
    }
    async createPost(form, user, files) {
        return await this.MomentsService.createPost(form, user.id, files);
    }
    async editPost(form, files, user) {
        return await this.MomentsService.editPost(form, files, user.id);
    }
    async deletePost(momentId) {
        await this.MomentsService.deletePost(momentId);
    }
    async saveImage(file) {
        await this.MomentsService.saveImage(file);
    }
    async likePost(momentId, user) {
        await this.MomentsService.likePost(momentId, user.id);
    }
    async dislikePost(momentId, user) {
        await this.MomentsService.dislikePost(momentId, user.id);
    }
    async getLatestPosts() {
        const latestPosts = await this.MomentsService.getLatestPosts();
        return latestPosts;
    }
    async getOnePost(code, momentId, uuid) {
        const post = await this.MomentsService.getOnePost(momentId, code, uuid);
        return post;
    }
    async getPosts(code, page, type, filter) {
        if (type) {
            switch (type) {
                case 'community':
                    type = '한인 커뮤니티';
                    break;
                case 'trip':
                    type = '여행정보 공유';
                    break;
                case 'scam alert':
                    type = '사기 경보';
                    break;
                case 'accompany':
                    type = '동행자 모집';
                    break;
                default:
                    break;
            }
        }
        if (filter) {
            return await this.MomentsService.getFilterPosts(filter, code, type, page);
        }
        return await this.MomentsService.getPosts(code, page, type);
    }
};
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create moment post' }),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('image', 5, {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __param(2, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [moments_dto_1.MomentCreateRequestDto, Object, Array]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "createPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Edit post' }),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('image', 5, {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post('edit'),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFiles()),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [moments_dto_1.MomentModifyRequestDto, Array, Object]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "editPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete post' }),
    common_1.Delete('/:momentId'),
    __param(0, common_1.Param('momentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "deletePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'save image for post' }),
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
    common_1.Post('image'),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "saveImage", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'like post' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('like/:momentId'),
    __param(0, common_1.Param('momentId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "likePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'dislike post' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('dislike/:momentId'),
    __param(0, common_1.Param('momentId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "dislikePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get latest posts by using ID -' }),
    common_1.Get('latest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "getLatestPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get one post for post page' }),
    common_1.Get('/:code/:momentId'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Param('momentId', common_1.ParseIntPipe)),
    __param(2, common_1.Query('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "getOnePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get posts' }),
    common_1.Get(),
    __param(0, common_1.Query('code')),
    __param(1, common_1.Query('page', common_1.ParseIntPipe)),
    __param(2, common_1.Query('type')),
    __param(3, common_1.Query('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "getPosts", null);
MomentsController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Moments'),
    swagger_1.ApiCookieAuth('connect.sid'),
    common_1.Controller('/api/moment'),
    __metadata("design:paramtypes", [moments_service_1.MomentsService])
], MomentsController);
exports.MomentsController = MomentsController;
//# sourceMappingURL=moments.controller.js.map