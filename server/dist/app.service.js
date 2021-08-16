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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Moments_1 = require("./entities/Moments");
const Stories_1 = require("./entities/Stories");
let AppService = class AppService {
    constructor(MomentsRepository, StoriesRepository) {
        this.MomentsRepository = MomentsRepository;
        this.StoriesRepository = StoriesRepository;
    }
    welcomeFallInAsia() {
        return 'Hello Fall IN Asia! 코로나 끝나면 우리 모두 여행가자~!';
    }
    async getSearchPosts(searchWord) {
        const moments = await this.MomentsRepository.createQueryBuilder('moments')
            .leftJoinAndSelect('moments.country', 'country')
            .leftJoinAndSelect('moments.user', 'user')
            .where(`MATCH(content) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
            .getMany();
        const stories = await this.StoriesRepository.createQueryBuilder('stories')
            .select(['stories.title', 'stories.thumbnail', 'stories.id'])
            .leftJoinAndSelect('stories.country', 'country')
            .leftJoinAndSelect('stories.comments', 'comments')
            .leftJoinAndSelect('stories.likedUser', 'likedUser')
            .leftJoinAndSelect('stories.user', 'user')
            .where(`MATCH(stories.content) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
            .orWhere(`MATCH(stories.region) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
            .orWhere(`MATCH(stories.title) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
            .getMany();
        return { searchWord, moments, stories };
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Moments_1.Moments)),
    __param(1, typeorm_1.InjectRepository(Stories_1.Stories)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map