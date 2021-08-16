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
exports.Countries = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Moments_1 = require("./Moments");
const Articles_1 = require("./Articles");
const Stories_1 = require("./Stories");
let Countries = class Countries {
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
], Countries.prototype, "id", void 0);
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
], Countries.prototype, "code", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '태국',
        description: 'country name especially wrote down in korean Language  ',
    }),
    typeorm_1.Column('varchar', { name: 'name', length: 20 }),
    __metadata("design:type", String)
], Countries.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '동북아시아',
        description: 'continent each country',
    }),
    typeorm_1.Column('enum', {
        name: 'continent',
        enum: ['동북아시아', '동남아시아', '남아시아'],
    }),
    __metadata("design:type", String)
], Countries.prototype, "continent", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://domain.com/uploads/239483294.jpg',
        description: 'image src for country introduce',
    }),
    typeorm_1.Column('longtext', { name: 'image_src' }),
    __metadata("design:type", String)
], Countries.prototype, "image_src", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://domain.com/uploads/239483294.jpg',
        description: 'flag src for country introduce',
    }),
    typeorm_1.Column('longtext', { name: 'flag_src' }),
    __metadata("design:type", String)
], Countries.prototype, "flag_src", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Countries.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", Date)
], Countries.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Moments_1.Moments, (moments) => moments.country),
    __metadata("design:type", Array)
], Countries.prototype, "moments", void 0);
__decorate([
    typeorm_1.OneToMany(() => Articles_1.Articles, (articles) => articles.country),
    __metadata("design:type", Array)
], Countries.prototype, "articles", void 0);
__decorate([
    typeorm_1.OneToMany(() => Stories_1.Stories, (stories) => stories.country),
    __metadata("design:type", Array)
], Countries.prototype, "stories", void 0);
Countries = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'countries' })
], Countries);
exports.Countries = Countries;
//# sourceMappingURL=Countries.js.map