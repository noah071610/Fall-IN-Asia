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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const logged_in_guard_1 = require("../auth/logged-in.guard");
const user_decorator_1 = require("../decorators/user.decorator");
const comments_dto_1 = require("./comments.dto");
const json_respone_middleware_1 = require("../intersepter/json.respone.middleware");
const comments_service_1 = require("./comments.service");
let CommentsController = class CommentsController {
    constructor(CommentService) {
        this.CommentService = CommentService;
    }
    async getComments(postId, postType) {
        return await this.CommentService.getComments(postId, postType);
    }
    async createComment(form, user) {
        return await this.CommentService.createComment(form, user.id);
    }
    async deleteComment(commentId) {
        await this.CommentService.deleteComment(commentId);
    }
    async createSubComment(form, user) {
        const createdSubComment = await this.CommentService.createSubComment(form.content, user.id, form.commentId);
        return createdSubComment;
    }
    async deleteSubComment(subCommentId) {
        await this.CommentService.deleteSubComment(subCommentId);
    }
    async likeComment(commentId, user) {
        await this.CommentService.likeComment(commentId, user.id);
    }
    async dislikeComment(commentId, user) {
        await this.CommentService.dislikeComment(commentId, user.id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'get Comment by post id' }),
    common_1.Get('/:postId'),
    __param(0, common_1.Param('postId', common_1.ParseIntPipe)),
    __param(1, common_1.Query('postType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getComments", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create Comment' }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comments_dto_1.CommentCreateDto, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createComment", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete Comment' }),
    common_1.Delete(':commentId'),
    __param(0, common_1.Param('commentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteComment", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create SubComment' }),
    common_1.Post('/subComment'),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comments_dto_1.CommentCreateDto, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createSubComment", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete SubComment' }),
    common_1.Delete('/subComment/:subCommentId'),
    __param(0, common_1.Param('subCommentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteSubComment", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'like Comment' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('like/:commentId'),
    __param(0, common_1.Param('commentId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "likeComment", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'dislike Comment' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('dislike/:commentId'),
    __param(0, common_1.Param('commentId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "dislikeComment", null);
CommentsController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Comment'),
    swagger_1.ApiCookieAuth('connect.sid'),
    common_1.Controller('/api/comment'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map