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
exports.StoriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const json_respone_middleware_1 = require("../intersepter/json.respone.middleware");
const logged_in_guard_1 = require("../auth/logged-in.guard");
const stories_service_1 = require("./stories.service");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = __importDefault(require("path"));
const user_decorator_1 = require("../decorators/user.decorator");
const stories_dto_1 = require("./stories.dto");
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let StoriesController = class StoriesController {
    constructor(StoriesService) {
        this.StoriesService = StoriesService;
    }
    async createPost(form, user, file) {
        return await this.StoriesService.createPost(form, user.id, file);
    }
    async editPost(form, file, user) {
        return await this.StoriesService.editPost(form, file, user === null || user === void 0 ? void 0 : user.id);
    }
    async deletePost(storyId) {
        await this.StoriesService.deletePost(storyId);
    }
    async saveImage(file) {
        const image = await this.StoriesService.saveImage(file);
        return image;
    }
    async likePost(storyId, user) {
        await this.StoriesService.likePost(storyId, user.id);
    }
    async dislikePost(storyId, user) {
        await this.StoriesService.dislikePost(storyId, user.id);
    }
    async getPosts(code, page, filter) {
        if (filter) {
            return await this.StoriesService.getFilterPosts(filter, code, page);
        }
        return await this.StoriesService.getPosts(code, page);
    }
    async getLatestPosts() {
        const latestPosts = await this.StoriesService.getLatestPosts();
        return latestPosts;
    }
    async getPopularPosts(code) {
        const popularPosts = await this.StoriesService.getPopularPosts(code);
        return popularPosts;
    }
    async getSidePosts(storyId, userId) {
        const sidePosts = await this.StoriesService.getSidePosts(storyId, userId);
        return sidePosts;
    }
    async getOnePost(code, storyId, uuid) {
        const post = await this.StoriesService.getOnePost(storyId, code, uuid);
        return post;
    }
};
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create story post' }),
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
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stories_dto_1.StoryCreateDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "createPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Edit post' }),
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
    common_1.Post('edit'),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFile()),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stories_dto_1.StoryEditDto, Object, Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "editPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete post' }),
    common_1.Delete('/:storyId'),
    __param(0, common_1.Param('storyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "deletePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get preview posts for story page' }),
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
], StoriesController.prototype, "saveImage", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'like post' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('like/:storyId'),
    __param(0, common_1.Param('storyId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "likePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'dislike post' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('dislike/:storyId'),
    __param(0, common_1.Param('storyId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "dislikePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get posts' }),
    common_1.Get(),
    __param(0, common_1.Query('code')),
    __param(1, common_1.Query('page', common_1.ParseIntPipe)),
    __param(2, common_1.Query('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get latest posts by using ID' }),
    common_1.Get('latest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getLatestPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get popular 9 posts' }),
    common_1.Get('popular'),
    __param(0, common_1.Query('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getPopularPosts", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Get side posts each one for pagination on the post page',
    }),
    common_1.Get('side/:storyId/:userId'),
    __param(0, common_1.Param('storyId', common_1.ParseIntPipe)),
    __param(1, common_1.Param('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getSidePosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get one post for post page' }),
    common_1.Get(':code/:storyId'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Param('storyId', common_1.ParseIntPipe)),
    __param(2, common_1.Query('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getOnePost", null);
StoriesController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Story'),
    swagger_1.ApiCookieAuth('connect.sid'),
    common_1.Controller('/api/story'),
    __metadata("design:paramtypes", [stories_service_1.StoriesService])
], StoriesController);
exports.StoriesController = StoriesController;
//# sourceMappingURL=stories.controller.js.map