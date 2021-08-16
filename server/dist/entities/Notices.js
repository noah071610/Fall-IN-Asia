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
exports.Notices = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Comments_1 = require("./Comments");
const Moments_1 = require("./Moments");
const Stories_1 = require("./Stories");
const Users_1 = require("./Users");
let Notices = class Notices {
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
], Notices.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'KOR',
        description: 'country code',
        nullable: true,
    }),
    typeorm_1.Column('varchar', { name: 'code', nullable: true }),
    __metadata("design:type", String)
], Notices.prototype, "code", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'user id (not null)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Notices.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'moment notices',
        nullable: true,
    }),
    typeorm_1.Column('int', { name: 'momentId', nullable: true }),
    __metadata("design:type", Number)
], Notices.prototype, "momentId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'story notices',
        nullable: true,
    }),
    typeorm_1.Column('int', { name: 'storyId', nullable: true }),
    __metadata("design:type", Number)
], Notices.prototype, "storyId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'comment notices',
        nullable: true,
    }),
    typeorm_1.Column('int', { name: 'commentId', nullable: true }),
    __metadata("design:type", Number)
], Notices.prototype, "commentId", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '헝가리/유학/모멘트',
        description: 'notice header ',
    }),
    typeorm_1.Column('varchar', { name: 'header' }),
    __metadata("design:type", String)
], Notices.prototype, "header", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '12번 포스트에 댓글을 남기셨습니다.',
        description: 'notice content',
    }),
    typeorm_1.Column('varchar', { name: 'content' }),
    __metadata("design:type", String)
], Notices.prototype, "content", void 0);
__decorate([
    class_validator_1.IsDate(),
    swagger_1.ApiProperty({
        example: '2020/08/03',
        description: 'if read notice , check date',
        nullable: true,
    }),
    typeorm_1.Column('date', { name: 'readAt', nullable: true }),
    __metadata("design:type", Date)
], Notices.prototype, "readAt", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Notices.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Notices.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.notices, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'userId', referencedColumnName: 'id' }]),
    __metadata("design:type", Users_1.Users)
], Notices.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Moments_1.Moments, (moments) => moments.notices, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        nullable: true,
    }),
    typeorm_1.JoinColumn({ name: 'momentId' }),
    __metadata("design:type", Moments_1.Moments)
], Notices.prototype, "moment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Stories_1.Stories, (stories) => stories.notices, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        nullable: true,
    }),
    typeorm_1.JoinColumn({ name: 'storyId' }),
    __metadata("design:type", Stories_1.Stories)
], Notices.prototype, "story", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Comments_1.Comments, (comments) => comments.notices, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        nullable: true,
    }),
    typeorm_1.JoinColumn({ name: 'commentId' }),
    __metadata("design:type", Comments_1.Comments)
], Notices.prototype, "comment", void 0);
Notices = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'notice' })
], Notices);
exports.Notices = Notices;
//# sourceMappingURL=Notices.js.map