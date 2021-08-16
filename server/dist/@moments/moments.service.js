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
exports.MomentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const Images_1 = require("../entities/Images");
const Notices_1 = require("../entities/Notices");
const Moments_1 = require("../entities/Moments");
const Countries_1 = require("../entities/Countries");
const MomentLike_1 = require("../entities/MomentLike");
const typeorm_2 = require("@nestjs/typeorm");
const viewer = new Object();
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let MomentsService = class MomentsService {
    constructor(MomentsRepository, CountriesRepository, ImagesRepository, MomentLikeRepository, NoticesRepository) {
        this.MomentsRepository = MomentsRepository;
        this.CountriesRepository = CountriesRepository;
        this.ImagesRepository = ImagesRepository;
        this.MomentLikeRepository = MomentLikeRepository;
        this.NoticesRepository = NoticesRepository;
    }
    async createPost(form, userId, files) {
        if (!form) {
            throw new common_1.NotFoundException('작성 할 데이터가 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const newPostCreate = new Moments_1.Moments();
        newPostCreate.code = form.code;
        newPostCreate.content = form.content;
        newPostCreate.type = form.type;
        newPostCreate.country = { id: country.id };
        newPostCreate.user = { id: userId };
        const newPost = await this.MomentsRepository.save(newPostCreate);
        for (let i = 0; i < files.length; i++) {
            const newImage = new Images_1.Images();
            newImage.image_src = files[i].location;
            newImage.moment = newPost.id;
            await this.ImagesRepository.save(newImage);
        }
        await this.NoticesRepository.save({
            header: `${country.name}/모멘트`,
            code: newPost.code,
            userId: userId,
            momentId: newPost.id,
            content: `${form.content
                .slice(0, 30)
                .replace(/(<([^>]+)>)/gi, '')
                .replace(/&.*;/gi, '')
                .slice(0, 11)}...을 작성했습니다.`,
        });
        return { momentId: newPost.id };
    }
    async saveImage(file) {
        if (!file) {
            throw new common_1.NotFoundException('사용 할 이미지가 없습니다.');
        }
        const newImage = new Images_1.Images();
        newImage.image_src = file.location.replace(/\/original\//, '/thumb/');
        await this.ImagesRepository.save(newImage);
        return true;
    }
    async getOnePost(momentId, code, uuid) {
        const post = await this.MomentsRepository.createQueryBuilder('moments')
            .addSelect([
            'images.image_src',
            'country.name',
            'user.name',
            'user.icon',
            'user.id',
            'likedUser.id',
        ])
            .leftJoin('moments.country', 'country')
            .leftJoin('moments.user', 'user')
            .leftJoin('moments.images', 'images')
            .leftJoin('moments.likedUser', 'likedUser')
            .where('moments.id= :id', { id: momentId })
            .andWhere('moments.code= :code', { code })
            .getOne();
        if (!post) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        if (post && uuid) {
            if (!viewer[momentId]) {
                viewer[momentId] = [];
            }
            if (viewer[momentId].indexOf(uuid) == -1) {
                viewer[momentId].push(uuid);
                await this.MomentsRepository.createQueryBuilder('moments')
                    .update()
                    .set({
                    hit: () => 'hit + 1',
                })
                    .where('id = :id', { id: momentId })
                    .execute();
                setTimeout(() => {
                    viewer[momentId].splice(viewer[momentId].indexOf(uuid), 1);
                }, 600000);
            }
        }
        return post;
    }
    async getLatestPosts() {
        const latestPosts = await this.MomentsRepository.createQueryBuilder('moments')
            .addSelect(['country.name', 'user.name', 'user.icon'])
            .leftJoin('moments.country', 'country')
            .leftJoin('moments.user', 'user')
            .orderBy('moments.id', 'DESC')
            .take(2)
            .getMany();
        if (!latestPosts) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        return latestPosts;
    }
    async getFilterPosts(filter, code, type, page) {
        const filterPosts = await this.MomentsRepository.createQueryBuilder('moments')
            .where(code ? `moments.code = :code` : '1=1', { code })
            .andWhere(type ? `moments.type = :type` : '1=1', { type })
            .addSelect([
            'country.name',
            'user.id',
            'user.icon',
            'user.name',
            'likedUser.id',
            'comments.id',
        ])
            .leftJoin('moments.country', 'country')
            .leftJoin('moments.user', 'user')
            .leftJoin('moments.likedUser', 'likedUser')
            .leftJoin('moments.comments', 'comments')
            .leftJoinAndSelect('moments.images', 'images')
            .getMany();
        switch (filter) {
            case 'popular':
                return filterPosts
                    .sort((a, b) => b.likedUser.length - a.likedUser.length)
                    .slice((page - 1) * 10, page * 10);
            case 'comment':
                return filterPosts
                    .sort((a, b) => b.comments.length - a.comments.length)
                    .slice((page - 1) * 10, page * 10);
            case 'view':
                return filterPosts
                    .sort((a, b) => b.hit - a.hit)
                    .slice((page - 1) * 10, page * 10);
        }
    }
    async getPosts(code, page, type) {
        const posts = await this.MomentsRepository.createQueryBuilder('moments')
            .where(code ? `moments.code = :code` : '1=1', { code })
            .andWhere(type ? `moments.type = :type` : '1=1', { type })
            .addSelect([
            'country.name',
            'user.id',
            'user.icon',
            'user.name',
            'likedUser.id',
            'comments.id',
        ])
            .leftJoin('moments.country', 'country')
            .leftJoin('moments.user', 'user')
            .leftJoin('moments.likedUser', 'likedUser')
            .leftJoin('moments.comments', 'comments')
            .leftJoinAndSelect('moments.images', 'images')
            .orderBy('moments.id', 'DESC')
            .skip((page - 1) * 10)
            .take(10)
            .getMany();
        if (!posts) {
            throw new common_1.NotFoundException('모멘트를 찾을 수 없습니다.');
        }
        return posts;
    }
    async editPost(form, files, userId) {
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const editPost = await this.MomentsRepository.findOne({
            where: { id: form.momentId },
        });
        editPost.content = form.content;
        editPost.type = form.type;
        if (!editPost) {
            throw new common_1.NotFoundException('수정 할 게시물이 없습니다.');
        }
        await this.ImagesRepository.delete({
            moment: editPost.id,
        });
        if (files) {
            for (let i = 0; i < files.length; i++) {
                const newImage = new Images_1.Images();
                newImage.image_src = files[i].location;
                newImage.moment = editPost.id;
                await this.ImagesRepository.save(newImage);
            }
        }
        if (form.prevImage) {
            for (let i = 0; i < form.prevImage.length; i++) {
                const newImage = new Images_1.Images();
                newImage.image_src = form.prevImage[i];
                newImage.moment = editPost.id;
                await this.ImagesRepository.save(newImage);
            }
        }
        await this.MomentsRepository.save(editPost);
        await this.NoticesRepository.save({
            header: `${country.name}/모멘트`,
            code: form.code,
            userId,
            momentId: parseInt(form.momentId),
            content: `${form.momentId}번 모멘트를 수정했습니다.`,
        });
        return { momentId: parseInt(form.momentId) };
    }
    async likePost(momentId, userId) {
        if (!momentId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const newPostLike = new MomentLike_1.MomentLike();
        newPostLike.userId = userId;
        newPostLike.momentId = momentId;
        return await this.MomentLikeRepository.save(newPostLike);
    }
    async dislikePost(momentId, userId) {
        if (!momentId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        return await this.MomentLikeRepository.delete({ momentId, userId });
    }
    async deletePost(momentId) {
        if (!momentId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        return await this.MomentsRepository.delete({
            id: momentId,
        });
    }
};
MomentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(Moments_1.Moments)),
    __param(1, typeorm_2.InjectRepository(Countries_1.Countries)),
    __param(2, typeorm_2.InjectRepository(Images_1.Images)),
    __param(3, typeorm_2.InjectRepository(MomentLike_1.MomentLike)),
    __param(4, typeorm_2.InjectRepository(Notices_1.Notices)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], MomentsService);
exports.MomentsService = MomentsService;
//# sourceMappingURL=moments.service.js.map