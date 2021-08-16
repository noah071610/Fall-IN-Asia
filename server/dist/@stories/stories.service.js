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
exports.StoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Images_1 = require("../entities/Images");
const Stories_1 = require("../entities/Stories");
const typeorm_2 = require("typeorm");
const Notices_1 = require("../entities/Notices");
const Countries_1 = require("../entities/Countries");
const StoryLike_1 = require("../entities/StoryLike");
const stories_dto_1 = require("./stories.dto");
const viewObj = new Object();
let StoriesService = class StoriesService {
    constructor(StoriesRepository, CountriesRepository, ImagesRepository, StoryLikeRepository, NoticesRepository) {
        this.StoriesRepository = StoriesRepository;
        this.CountriesRepository = CountriesRepository;
        this.ImagesRepository = ImagesRepository;
        this.StoryLikeRepository = StoryLikeRepository;
        this.NoticesRepository = NoticesRepository;
    }
    async createPost(form, userId, file) {
        if (!form) {
            throw new common_1.NotFoundException('작성 할 데이터가 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const newPostCreate = new Stories_1.Stories();
        newPostCreate.code = form.code;
        newPostCreate.title = form.title;
        newPostCreate.content = form.content;
        newPostCreate.region = form.region;
        newPostCreate.lat = form.lat;
        newPostCreate.lng = form.lng;
        newPostCreate.country = { id: country.id };
        newPostCreate.user = { id: userId };
        if (file) {
            newPostCreate.thumbnail = file.location.replace(/\/original\//, '/thumb/');
        }
        const newPost = await this.StoriesRepository.save(newPostCreate);
        await this.NoticesRepository.save({
            header: `${country.name}/연대기`,
            code: newPost.code,
            userId: userId,
            storyId: newPost.id,
            content: `${form.title.slice(0, 10)}...을 작성했습니다.`,
        });
        return { storyId: newPost.id };
    }
    async saveImage(file) {
        if (!file) {
            throw new common_1.NotFoundException('사용 할 이미지가 없습니다.');
        }
        const newImage = new Images_1.Images();
        newImage.image_src = file.location.replace(/\/original\//, '/thumb/');
        await this.ImagesRepository.save(newImage);
        return newImage.image_src;
    }
    async getSidePosts(storyId, userId) {
        const prevPost = await this.StoriesRepository.findOne({
            select: ['thumbnail', 'title', 'code', 'id'],
            where: { user: userId, id: typeorm_2.LessThan(storyId) },
        }).then((res) => {
            if (!res) {
                return this.StoriesRepository.findOne({
                    select: ['thumbnail', 'title', 'code', 'id'],
                    where: { id: typeorm_2.LessThan(storyId) },
                });
            }
            else {
                return res;
            }
        });
        const nextPost = await this.StoriesRepository.findOne({
            select: ['thumbnail', 'title', 'code', 'id'],
            where: { user: userId, id: typeorm_2.MoreThan(storyId) },
        }).then((res) => {
            if (!res) {
                return this.StoriesRepository.findOne({
                    select: ['thumbnail', 'title', 'code', 'id'],
                    where: { id: typeorm_2.MoreThan(storyId) },
                });
            }
            else {
                return res;
            }
        });
        return { prevPost, nextPost };
    }
    async getOnePost(storyId, code, uuid) {
        const post = await this.StoriesRepository.findOne({
            where: {
                id: storyId,
                code,
            },
            relations: [
                'user',
                'country',
                'likedUser',
                'images',
                'comments',
                'comments.user',
                'comments.likedUser',
                'comments.subComments',
                'comments.subComments.user',
            ],
        });
        if (!post) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        if (post && uuid) {
            if (!viewObj[storyId]) {
                viewObj[storyId] = [];
            }
            if (viewObj[storyId].indexOf(uuid) == -1) {
                viewObj[storyId].push(uuid);
                await this.StoriesRepository.createQueryBuilder('stories')
                    .update()
                    .set({
                    hit: () => 'hit + 1',
                })
                    .where('id = :id', { id: storyId })
                    .execute();
                setTimeout(() => {
                    viewObj[storyId].splice(viewObj[storyId].indexOf(uuid), 1);
                }, 600000);
            }
        }
        return post;
    }
    async getLatestPosts() {
        const latestPosts = await this.StoriesRepository.find({
            relations: ['country', 'user'],
            order: { id: 'DESC' },
            take: 3,
        });
        if (!latestPosts) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        return latestPosts;
    }
    async getFilterPosts(filter, code, page) {
        const filterPosts = await this.StoriesRepository.createQueryBuilder('stories')
            .where(code ? `stories.code = :code` : '1=1', { code })
            .leftJoinAndSelect('stories.country', 'country')
            .leftJoinAndSelect('stories.user', 'user')
            .leftJoinAndSelect('stories.likedUser', 'likedUser')
            .leftJoinAndSelect('stories.comments', 'comments')
            .leftJoinAndSelect('stories.images', 'images')
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
    async getPopularPosts(code) {
        const pointWithpostId = await this.StoriesRepository.createQueryBuilder('stories')
            .select([
            'stories.id',
            'stories.hit',
            'likedUser.id as user_len',
            'comments.id as comment_len',
        ])
            .leftJoinAndSelect('stories.likedUser', 'likedUser')
            .leftJoinAndSelect('stories.comments', 'comments')
            .where(code ? `stories.code = :code` : '1=1', { code })
            .orderBy('stories.id', 'DESC')
            .take(50)
            .getMany()
            .then((res) => {
            return res
                .map((v) => {
                return {
                    id: v.id,
                    point: v.hit * 0.001 + v.comments.length + v.likedUser.length * 5,
                };
            })
                .sort((a, b) => b.point - a.point)
                .splice(0, 4);
        });
        let popularPosts = [];
        for (const i of pointWithpostId) {
            await this.StoriesRepository.findOne({
                where: { id: i.id },
                relations: ['user', 'country', 'likedUser', 'comments'],
            }).then((res) => {
                popularPosts.push(res);
            });
        }
        return popularPosts;
    }
    async getPosts(code, page) {
        const posts = await this.StoriesRepository.createQueryBuilder('stories')
            .leftJoinAndSelect('stories.country', 'country')
            .leftJoinAndSelect('stories.user', 'user')
            .leftJoinAndSelect('stories.likedUser', 'likedUser')
            .leftJoinAndSelect('stories.comments', 'comments')
            .leftJoinAndSelect('stories.images', 'images')
            .where(code ? `stories.code = :code` : '1=1', { code })
            .orderBy('stories.id', 'DESC')
            .skip((page - 1) * 10)
            .take(10)
            .getMany();
        return posts;
    }
    async editPost(form, file, userId) {
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const editPost = await this.StoriesRepository.findOne({
            where: { id: form.storyId },
        });
        if (!editPost || !country) {
            throw new common_1.NotFoundException('수정 할 게시물이 없습니다.');
        }
        editPost.code = form.code;
        editPost.title = form.title;
        editPost.content = form.content;
        editPost.region = form.region;
        editPost.lat = form.lat;
        editPost.lng = form.lng;
        editPost.country = { id: country.id };
        if (file) {
            editPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
        }
        await this.StoriesRepository.save(editPost);
        await this.NoticesRepository.save({
            header: `${country.name}/연대기`,
            code: editPost.code,
            userId,
            storyId: editPost.id,
            content: `${form.title.slice(0, 10)}...을 수정했습니다.`,
        });
        return { storyId: parseInt(form.storyId) };
    }
    async likePost(storyId, userId) {
        if (!storyId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const newPostLike = new StoryLike_1.StoryLike();
        newPostLike.userId = userId;
        newPostLike.storyId = storyId;
        return await this.StoryLikeRepository.save(newPostLike);
    }
    async dislikePost(storyId, userId) {
        if (!storyId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        return await this.StoryLikeRepository.delete({ storyId, userId });
    }
    async deletePost(storyId) {
        if (!storyId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        return await this.StoriesRepository.delete({
            id: storyId,
        });
    }
};
StoriesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Stories_1.Stories)),
    __param(1, typeorm_1.InjectRepository(Countries_1.Countries)),
    __param(2, typeorm_1.InjectRepository(Images_1.Images)),
    __param(3, typeorm_1.InjectRepository(StoryLike_1.StoryLike)),
    __param(4, typeorm_1.InjectRepository(Notices_1.Notices)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StoriesService);
exports.StoriesService = StoriesService;
//# sourceMappingURL=stories.service.js.map