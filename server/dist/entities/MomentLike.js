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
exports.MomentLike = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Moments_1 = require("./Moments");
const Users_1 = require("./Users");
let MomentLike = class MomentLike {
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
], MomentLike.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'UserId (Like)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MomentLike.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'momentId (Liked)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MomentLike.prototype, "momentId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.likeMoment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", Users_1.Users)
], MomentLike.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Moments_1.Moments, (moments) => moments.likedUser, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'momentId' }),
    __metadata("design:type", Moments_1.Moments)
], MomentLike.prototype, "moment", void 0);
MomentLike = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'momentLike' })
], MomentLike);
exports.MomentLike = MomentLike;
//# sourceMappingURL=MomentLike.js.map