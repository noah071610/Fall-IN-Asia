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
exports.Users = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Moments_1 = require("./Moments");
const Comments_1 = require("./Comments");
const Stories_1 = require("./Stories");
const MomentLike_1 = require("./MomentLike");
const Notices_1 = require("./Notices");
const SubComments_1 = require("./SubComments");
const StoryLike_1 = require("./StoryLike");
const Follow_1 = require("./Follow");
const CommentLike_1 = require("./CommentLike");
const Articles_1 = require("./Articles");
let Users = class Users {
};
__decorate([
    typeorm_1.Index(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: '394823049802',
        description: 'socialId',
    }),
    typeorm_1.Column('varchar', {
        unique: true,
        select: false,
        name: 'socialId',
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "socialId", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'google',
        description: 'provider from social media',
    }),
    typeorm_1.Column('varchar', {
        select: false,
        name: 'provider',
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "provider", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'noah071610@naver.com',
        description: 'email (if they login or signup with social, it`s not necessary)',
        nullable: true,
    }),
    typeorm_1.Column('varchar', {
        name: 'email',
        select: false,
        unique: true,
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '장현수',
        description: 'name',
    }),
    typeorm_1.Column('varchar', { name: 'name', length: 30 }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '안녕하세요 여행을 너무 사랑하는 노아입니다. 일본과 태국 여행을 좋아합니다.',
        description: 'introduce',
    }),
    typeorm_1.Column('varchar', { name: 'introduce' }),
    __metadata("design:type", String)
], Users.prototype, "introduce", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({
        example: 'https://images.com/324324231',
        description: 'icon url',
    }),
    typeorm_1.Column('varchar', {
        name: 'icon',
        default: 'https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png',
    }),
    __metadata("design:type", String)
], Users.prototype, "icon", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({
        example: '320sd8f78f2300dsa',
        description: 'Password',
        nullable: true,
    }),
    typeorm_1.Column('varchar', {
        name: 'password',
        length: 100,
        select: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'admin',
    }),
    typeorm_1.Column('boolean', { name: 'admin', select: false, default: false }),
    __metadata("design:type", Boolean)
], Users.prototype, "admin", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", Date)
], Users.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.DeleteDateColumn({ select: false }),
    __metadata("design:type", Date)
], Users.prototype, "deletedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Follow_1.Follow, (follow) => follow.following, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "followers", void 0);
__decorate([
    typeorm_1.OneToMany(() => Follow_1.Follow, (follow) => follow.follower, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "followings", void 0);
__decorate([
    typeorm_1.OneToMany(() => Moments_1.Moments, (moments) => moments.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "moments", void 0);
__decorate([
    typeorm_1.OneToMany(() => Stories_1.Stories, (stories) => stories.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "stories", void 0);
__decorate([
    typeorm_1.OneToMany(() => Articles_1.Articles, (articles) => articles.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "articles", void 0);
__decorate([
    typeorm_1.OneToMany(() => Comments_1.Comments, (comments) => comments.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(() => SubComments_1.SubComments, (subComments) => subComments.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "subComments", void 0);
__decorate([
    typeorm_1.OneToMany(() => MomentLike_1.MomentLike, (momentLike) => momentLike.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "likeMoment", void 0);
__decorate([
    typeorm_1.OneToMany(() => CommentLike_1.CommentLike, (commentLike) => commentLike.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "likeComment", void 0);
__decorate([
    typeorm_1.OneToMany(() => StoryLike_1.StoryLike, (storyLike) => storyLike.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "likeStory", void 0);
__decorate([
    typeorm_1.OneToMany(() => Notices_1.Notices, (notices) => notices.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "notices", void 0);
Users = __decorate([
    typeorm_1.Index('email', ['email'], { unique: true }),
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'users' })
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.js.map