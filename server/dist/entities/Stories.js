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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stories = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Notices_1 = require("./Notices");
const Comments_1 = require("./Comments");
const Countries_1 = require("./Countries");
const Images_1 = require("./Images");
const StoryLike_1 = require("./StoryLike");
const Users_1 = require("./Users");
let Stories = class Stories {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Stories.prototype, "id", void 0);
__decorate([
    typeorm_1.Index(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'KOR',
        description: 'country code for url or query by using English',
    }),
    typeorm_1.Column('varchar', { name: 'code' }),
    __metadata("design:type", String)
], Stories.prototype, "code", void 0);
__decorate([
    typeorm_1.Index(['region'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '다합 , dahab',
        description: 'region where user visited',
    }),
    typeorm_1.Column('varchar', { name: 'region' }),
    __metadata("design:type", String)
], Stories.prototype, "region", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '133.2342345',
        description: 'latitute of region',
    }),
    typeorm_1.Column('float', { name: 'lat' }),
    __metadata("design:type", Number)
], Stories.prototype, "lat", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '53.2342345',
        description: 'longitude of region',
    }),
    typeorm_1.Column('float', { name: 'lng' }),
    __metadata("design:type", Number)
], Stories.prototype, "lng", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://upload/images/03420204.blob',
        description: 'one picture of thumbnail for story',
        nullable: true,
    }),
    typeorm_1.Column('longtext', { name: 'thumbnail', nullable: true }),
    __metadata("design:type", String)
], Stories.prototype, "thumbnail", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 125,
        description: 'hit number each post',
    }),
    typeorm_1.Column('int', { name: 'hit', default: 0 }),
    __metadata("design:type", Number)
], Stories.prototype, "hit", void 0);
__decorate([
    typeorm_1.Index(['title'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '아유타야 연대기 1화 ...',
        description: 'title for post',
    }),
    typeorm_1.Column('varchar', { name: 'title', length: 50 }),
    __metadata("design:type", String)
], Stories.prototype, "title", void 0);
__decorate([
    typeorm_1.Index(['content'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '태국에 처음 놀러갔을때 크게 놀랐던게 있습니다. 그건...',
        description: 'content in the post',
    }),
    typeorm_1.Column('longtext', { name: 'content' }),
    __metadata("design:type", String)
], Stories.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Stories.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Stories.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Notices_1.Notices, (notices) => notices.story, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Stories.prototype, "notices", void 0);
__decorate([
    typeorm_1.OneToMany(() => Images_1.Images, (images) => images.story, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Stories.prototype, "images", void 0);
__decorate([
    typeorm_1.OneToMany(() => StoryLike_1.StoryLike, (storyLike) => storyLike.story, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Stories.prototype, "likedUser", void 0);
__decorate([
    typeorm_1.OneToMany(() => Comments_1.Comments, (comments) => comments.story, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Stories.prototype, "comments", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Countries_1.Countries, (countries) => countries.moments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'country', referencedColumnName: 'id' }),
    __metadata("design:type", Countries_1.Countries)
], Stories.prototype, "country", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.stories, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'user', referencedColumnName: 'id' }]),
    __metadata("design:type", Users_1.Users)
], Stories.prototype, "user", void 0);
Stories = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'stories' })
], Stories);
exports.Stories = Stories;
//# sourceMappingURL=Stories.js.map