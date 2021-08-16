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
exports.Articles = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Countries_1 = require("./Countries");
const Images_1 = require("./Images");
const Users_1 = require("./Users");
let Articles = class Articles {
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
], Articles.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 4,
        description: 'ranking number for article recommendation',
        nullable: true,
    }),
    typeorm_1.Column({ type: 'int', name: 'ranking', nullable: true }),
    __metadata("design:type", Number)
], Articles.prototype, "ranking", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({
        example: '지금 인기!',
        description: 'ranking number for article recommendation',
        nullable: true,
    }),
    typeorm_1.Column('varchar', { name: 'label', nullable: true }),
    __metadata("design:type", String)
], Articles.prototype, "label", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '관광뉴스',
        description: 'articles type',
    }),
    typeorm_1.Column('enum', {
        name: 'type',
        enum: ['관광뉴스', '트렌드', '쇼핑', '이색체험', '이벤트'],
    }),
    __metadata("design:type", String)
], Articles.prototype, "type", void 0);
__decorate([
    typeorm_1.Index(['region'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '다합 , dahab',
        description: 'region for articles',
    }),
    typeorm_1.Column('varchar', { name: 'region' }),
    __metadata("design:type", String)
], Articles.prototype, "region", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '133.2342345',
        description: 'latitute of region',
    }),
    typeorm_1.Column('float', { name: 'lat' }),
    __metadata("design:type", Number)
], Articles.prototype, "lat", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '53.2342345',
        description: 'longitude of region',
    }),
    typeorm_1.Column('float', { name: 'lng' }),
    __metadata("design:type", Number)
], Articles.prototype, "lng", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://upload/images/03420204.blob',
        description: 'one picture of thumbnail for article',
        nullable: true,
    }),
    typeorm_1.Column('longtext', { name: 'thumbnail', nullable: true }),
    __metadata("design:type", String)
], Articles.prototype, "thumbnail", void 0);
__decorate([
    typeorm_1.Index(['title'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '꼭 가봐야하는 이색체험 명소 ...',
        description: 'title for news',
    }),
    typeorm_1.Column('varchar', { name: 'title', length: 50 }),
    __metadata("design:type", String)
], Articles.prototype, "title", void 0);
__decorate([
    typeorm_1.Index(['content'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '태국에 처음 놀러갔을때 크게 놀랐던게 있습니다. 그건...',
        description: 'content in the news',
    }),
    typeorm_1.Column('longtext', { name: 'content' }),
    __metadata("design:type", String)
], Articles.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Articles.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", Date)
], Articles.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Images_1.Images, (images) => images.article, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Articles.prototype, "images", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Countries_1.Countries, (countries) => countries.articles, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'country', referencedColumnName: 'id' }),
    __metadata("design:type", Countries_1.Countries)
], Articles.prototype, "country", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.articles, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'user', referencedColumnName: 'id' }),
    __metadata("design:type", Users_1.Users)
], Articles.prototype, "user", void 0);
Articles = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'articles' })
], Articles);
exports.Articles = Articles;
//# sourceMappingURL=Articles.js.map