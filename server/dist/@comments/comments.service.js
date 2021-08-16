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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const Comments_1 = require("../entities/Comments");
const typeorm_1 = require("typeorm");
const SubComments_1 = require("../entities/SubComments");
const typeorm_2 = require("@nestjs/typeorm");
const comments_dto_1 = require("./comments.dto");
const CommentLike_1 = require("../entities/CommentLike");
const Notices_1 = require("../entities/Notices");
const Moments_1 = require("../entities/Moments");
const Stories_1 = require("../entities/Stories");
let CommentsService = class CommentsService {
    constructor(CommentsRepository, subCommentsRepository, CommentLikeRepository, NoticesRepository, MomentsRepository, StoriesRepository) {
        this.CommentsRepository = CommentsRepository;
        this.subCommentsRepository = subCommentsRepository;
        this.CommentLikeRepository = CommentLikeRepository;
        this.NoticesRepository = NoticesRepository;
        this.MomentsRepository = MomentsRepository;
        this.StoriesRepository = StoriesRepository;
    }
    async createComment(form, userId) {
        const newComment = new Comments_1.Comments();
        newComment.content = form.content;
        newComment.user = { id: userId };
        if (form.momentId) {
            newComment.moment = { id: form.momentId };
            const moment = await this.MomentsRepository.findOne({
                relations: ['country', 'user'],
                where: { id: form.momentId },
            });
            await this.NoticesRepository.save({
                header: `${moment.country.name}/${moment.id}번모멘트/댓글`,
                code: moment.code,
                userId: userId,
                momentId: moment.id,
                content: `${form.content.slice(0, 10)}...을 작성했습니다.`,
            });
            if (moment.user.id !== userId) {
                await this.NoticesRepository.save({
                    header: `${moment.country.name}/${moment.id}번모멘트/댓글`,
                    code: moment.code,
                    userId: moment.user.id,
                    momentId: moment.id,
                    content: `${moment.content
                        .slice(0, 30)
                        .replace(/(<([^>]+)>)/gi, '')
                        .replace(/&.*;/gi, '')
                        .slice(0, 10)}... 에 댓글이 달렸습니다.`,
                });
            }
        }
        else {
            newComment.story = { id: form.storyId };
            const story = await this.StoriesRepository.findOne({
                relations: ['country', 'user'],
                where: { id: form.storyId },
            });
            await this.NoticesRepository.save({
                header: `${story.country.name}/${story.id}번연대기/댓글`,
                code: story.code,
                userId,
                storyId: story.id,
                content: `${form.content.slice(0, 10)}...을 작성했습니다.`,
            });
            if (story.user.id !== userId) {
                await this.NoticesRepository.save({
                    header: `${story.country.name}/${story.id}번연대기/댓글`,
                    code: story.code,
                    userId: story.user.id,
                    storyId: story.id,
                    content: `${story.title.slice(0, 10)}... 에 댓글이 달렸습니다.`,
                });
            }
        }
        await this.CommentsRepository.save(newComment);
        return true;
    }
    async getComments(postId, postType) {
        const comments = this.CommentsRepository.createQueryBuilder('comments')
            .addSelect([
            'likedUser.id',
            'user.id',
            'user.icon',
            'user.name',
            'subComments_user.id',
            'subComments_user.icon',
            'subComments_user.name',
        ])
            .leftJoin('comments.likedUser', 'likedUser')
            .leftJoin('comments.user', 'user')
            .leftJoinAndSelect('comments.subComments', 'subComments')
            .leftJoin('subComments.user', 'subComments_user');
        if (postType === 'moment') {
            return await comments
                .where('comments.moment= :moment', { moment: postId })
                .orderBy({
                'comments.id': 'ASC',
                'subComments_user.id': 'ASC',
            })
                .getMany();
        }
        else if (postType === 'story') {
            return await comments
                .where('comments.story= :story', { story: postId })
                .orderBy({
                'comments.id': 'ASC',
                'subComments_user.id': 'ASC',
            })
                .getMany();
        }
    }
    async deleteComment(commentId) {
        await this.CommentsRepository.delete({ id: commentId });
        return true;
    }
    async createSubComment(content, userId, commentId) {
        const newSubComment = new SubComments_1.SubComments();
        newSubComment.content = content;
        newSubComment.user = { id: userId };
        newSubComment.comment = { id: commentId };
        await this.subCommentsRepository.save(newSubComment);
        return;
    }
    async deleteSubComment(subCommentId) {
        await this.subCommentsRepository.delete({ id: subCommentId });
        return true;
    }
    async likeComment(commentId, userId) {
        if (!commentId) {
            throw new common_1.NotFoundException('댓글을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const newCommentLike = new CommentLike_1.CommentLike();
        newCommentLike.userId = userId;
        newCommentLike.commentId = commentId;
        return await this.CommentLikeRepository.save(newCommentLike);
    }
    async dislikeComment(commentId, userId) {
        if (!commentId) {
            throw new common_1.NotFoundException('댓글을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        return await this.CommentLikeRepository.delete({ commentId, userId });
    }
};
CommentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(Comments_1.Comments)),
    __param(1, typeorm_2.InjectRepository(SubComments_1.SubComments)),
    __param(2, typeorm_2.InjectRepository(CommentLike_1.CommentLike)),
    __param(3, typeorm_2.InjectRepository(Notices_1.Notices)),
    __param(4, typeorm_2.InjectRepository(Moments_1.Moments)),
    __param(5, typeorm_2.InjectRepository(Stories_1.Stories)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map