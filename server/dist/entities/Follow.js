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
exports.Follow = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
let Follow = class Follow {
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
], Follow.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'followingId (Following)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Follow.prototype, "followingId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'followerId (Follower)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Follow.prototype, "followerId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.followings, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'followingId' }),
    __metadata("design:type", Users_1.Users)
], Follow.prototype, "following", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.followers, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'followerId' }),
    __metadata("design:type", Users_1.Users)
], Follow.prototype, "follower", void 0);
Follow = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'follow' })
], Follow);
exports.Follow = Follow;
//# sourceMappingURL=Follow.js.map