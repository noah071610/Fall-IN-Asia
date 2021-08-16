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
exports.Images = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Articles_1 = require("./Articles");
const Moments_1 = require("./Moments");
const Stories_1 = require("./Stories");
let Images = class Images {
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
], Images.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://domain.com/uploads/239483294.jpg',
        description: 'image src',
    }),
    typeorm_1.Column('longtext', { name: 'image_src' }),
    __metadata("design:type", String)
], Images.prototype, "image_src", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Images.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", Date)
], Images.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Stories_1.Stories, (stories) => stories.images, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'story', referencedColumnName: 'id' }]),
    __metadata("design:type", Stories_1.Stories)
], Images.prototype, "story", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Moments_1.Moments, (moments) => moments.images, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'moment', referencedColumnName: 'id' }]),
    __metadata("design:type", Moments_1.Moments)
], Images.prototype, "moment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Articles_1.Articles, (articles) => articles.images, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'article', referencedColumnName: 'id' }]),
    __metadata("design:type", Articles_1.Articles)
], Images.prototype, "article", void 0);
Images = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'images' })
], Images);
exports.Images = Images;
//# sourceMappingURL=Images.js.map