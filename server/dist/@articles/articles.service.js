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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Images_1 = require("../entities/Images");
const typeorm_2 = require("typeorm");
const Countries_1 = require("../entities/Countries");
const articles_dto_1 = require("./articles.dto");
const Articles_1 = require("../entities/Articles");
const Users_1 = require("../entities/Users");
let ArticlesService = class ArticlesService {
    constructor(ArticlesRepository, CountriesRepository, ImagesRepository, UsersRepository) {
        this.ArticlesRepository = ArticlesRepository;
        this.CountriesRepository = CountriesRepository;
        this.ImagesRepository = ImagesRepository;
        this.UsersRepository = UsersRepository;
    }
    async createPost(form, userId, file) {
        if (!form) {
            throw new common_1.NotFoundException('작성 할 데이터가 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const user = await this.UsersRepository.findOne({
            select: ['id', 'admin'],
            where: { id: userId },
        });
        if (!user.admin) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const newPost = new Articles_1.Articles();
        newPost.type = form.type;
        newPost.title = form.title;
        newPost.content = form.content;
        newPost.region = form.region;
        newPost.lat = form.lat;
        newPost.lng = form.lng;
        newPost.country = { id: country.id };
        newPost.user = { id: user.id };
        if (form.ranking) {
            newPost.ranking = parseInt(form.ranking);
        }
        if (form.label) {
            newPost.label = form.label;
        }
        if (file) {
            newPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
        }
        await this.ArticlesRepository.save(newPost);
        return { articleId: newPost.id };
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
    async getOnePost(articleId) {
        const post = await this.ArticlesRepository.findOne({
            where: {
                id: articleId,
            },
            relations: ['country', 'images', 'user'],
        });
        if (!post) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        return post;
    }
    async getPopularPosts(code) {
        if (code) {
            const country = await this.CountriesRepository.findOne({
                where: { code },
            });
            const rankingPostsByCountry = await this.ArticlesRepository.createQueryBuilder('articles')
                .leftJoinAndSelect('articles.country', 'country')
                .orderBy('articles.ranking', 'DESC')
                .where(`articles.country = :country`, { country: country.id })
                .take(4)
                .getMany();
            return rankingPostsByCountry;
        }
        else {
            const rankingPosts = await this.ArticlesRepository.createQueryBuilder('articles')
                .leftJoinAndSelect('articles.country', 'country')
                .orderBy('articles.ranking', 'DESC')
                .take(6)
                .getMany();
            return rankingPosts;
        }
    }
    async getPosts(type, page) {
        const posts = await this.ArticlesRepository.createQueryBuilder('articles')
            .leftJoinAndSelect('articles.country', 'country')
            .where(type ? `articles.type = :type` : '1=1', { type })
            .orderBy('articles.id', 'DESC')
            .skip((page - 1) * 10)
            .take(10)
            .getMany();
        return posts;
    }
    async editPost(form, file, userId) {
        if (!userId) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const user = await this.UsersRepository.findOne({
            select: ['id', 'admin'],
            where: { id: userId },
        });
        if (!user.admin) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const editPost = await this.ArticlesRepository.findOne({
            where: { id: form.articleId },
        });
        if (!editPost || !country) {
            throw new common_1.NotFoundException('수정 할 게시물이 없습니다.');
        }
        editPost.type = form.type;
        editPost.title = form.title;
        editPost.content = form.content;
        editPost.region = form.region;
        if (form.ranking) {
            editPost.ranking = parseInt(form.ranking);
        }
        if (form.label) {
            editPost.label = form.label;
        }
        editPost.lat = form.lat;
        editPost.lng = form.lng;
        editPost.country = { id: country.id };
        if (file) {
            editPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
        }
        await this.ArticlesRepository.save(editPost);
        return { articleId: parseInt(form.articleId) };
    }
    async deletePost(articleId, userId) {
        if (!articleId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const user = await this.UsersRepository.findOne({
            select: ['id', 'admin'],
            where: { id: userId },
        });
        if (!user.admin) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        return await this.ArticlesRepository.delete({
            id: articleId,
        });
    }
};
ArticlesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Articles_1.Articles)),
    __param(1, typeorm_1.InjectRepository(Countries_1.Countries)),
    __param(2, typeorm_1.InjectRepository(Images_1.Images)),
    __param(3, typeorm_1.InjectRepository(Users_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map