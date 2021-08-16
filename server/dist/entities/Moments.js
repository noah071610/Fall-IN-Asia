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
exports.Moments = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Notices_1 = require("./Notices");
const MomentLike_1 = require("./MomentLike");
const Comments_1 = require("./Comments");
const Countries_1 = require("./Countries");
const Images_1 = require("./Images");
const Users_1 = require("./Users");
let Moments = class Moments {
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
], Moments.prototype, "id", void 0);
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
], Moments.prototype, "code", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 125,
        description: 'hit number each post',
    }),
    typeorm_1.Column('int', { name: 'hit', default: 0 }),
    __metadata("design:type", Number)
], Moments.prototype, "hit", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '관광 및 여행',
        description: 'type for main post ',
    }),
    typeorm_1.Column('enum', {
        name: 'type',
        enum: ['한인 커뮤니티', '여행정보 공유', '사기 경보', '동행자 모집'],
    }),
    __metadata("design:type", String)
], Moments.prototype, "type", void 0);
__decorate([
    typeorm_1.Index(['content'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '제가 물어볼게있습니다! 저는 태국을 여행하는..',
        description: 'content in the main post',
    }),
    typeorm_1.Column('longtext', { name: 'content' }),
    __metadata("design:type", String)
], Moments.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Moments.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Moments.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Notices_1.Notices, (notices) => notices.moment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Moments.prototype, "notices", void 0);
__decorate([
    typeorm_1.OneToMany(() => Images_1.Images, (images) => images.moment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Moments.prototype, "images", void 0);
__decorate([
    typeorm_1.OneToMany(() => MomentLike_1.MomentLike, (momentLike) => momentLike.moment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Moments.prototype, "likedUser", void 0);
__decorate([
    typeorm_1.OneToMany(() => Comments_1.Comments, (comments) => comments.moment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Moments.prototype, "comments", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Countries_1.Countries, (countries) => countries.moments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'country', referencedColumnName: 'id' }),
    __metadata("design:type", Countries_1.Countries)
], Moments.prototype, "country", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.moments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'user', referencedColumnName: 'id' }),
    __metadata("design:type", Users_1.Users)
], Moments.prototype, "user", void 0);
Moments = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'moment' })
], Moments);
exports.Moments = Moments;
//# sourceMappingURL=Moments.js.map