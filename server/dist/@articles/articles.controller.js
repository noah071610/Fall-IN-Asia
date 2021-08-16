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
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const json_respone_middleware_1 = require("../intersepter/json.respone.middleware");
const logged_in_guard_1 = require("../auth/logged-in.guard");
const articles_service_1 = require("./articles.service");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = __importDefault(require("path"));
const user_decorator_1 = require("../decorators/user.decorator");
const articles_dto_1 = require("./articles.dto");
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let ArticlesController = class ArticlesController {
    constructor(ArticlesService) {
        this.ArticlesService = ArticlesService;
    }
    async createPost(form, user, file) {
        return await this.ArticlesService.createPost(form, user.id, file);
    }
    async editPost(form, file, user) {
        return await this.ArticlesService.editPost(form, file, user.id);
    }
    async deletePost(articleId, user) {
        await this.ArticlesService.deletePost(articleId, user.id);
    }
    async saveImage(file) {
        const image = await this.ArticlesService.saveImage(file);
        return image;
    }
    async getPosts(page, type) {
        return await this.ArticlesService.getPosts(type, page);
    }
    async getPopularPosts(code) {
        const popularPosts = await this.ArticlesService.getPopularPosts(code);
        return popularPosts;
    }
    async getOnePost(articleId) {
        const post = await this.ArticlesService.getOnePost(articleId);
        return post;
    }
};
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create article post' }),
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
    __metadata("design:paramtypes", [articles_dto_1.ArticleCreateDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "createPost", null);
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
    __metadata("design:paramtypes", [articles_dto_1.ArticleEditDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "editPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete post' }),
    common_1.Delete('/:articleId'),
    __param(0, common_1.Param('articleId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "deletePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'save image for article' }),
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
], ArticlesController.prototype, "saveImage", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get posts' }),
    common_1.Get(),
    __param(0, common_1.Query('page', common_1.ParseIntPipe)),
    __param(1, common_1.Query('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get latest posts by using ID' }),
    common_1.Get('popular'),
    __param(0, common_1.Query('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getPopularPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get one post for post page' }),
    common_1.Get(':articleId'),
    __param(0, common_1.Param('articleId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getOnePost", null);
ArticlesController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Articles'),
    swagger_1.ApiCookieAuth('connect.sid'),
    common_1.Controller('/api/article'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=articles.controller.js.map