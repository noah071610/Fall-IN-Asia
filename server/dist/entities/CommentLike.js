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
exports.CommentLike = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Comments_1 = require("./Comments");
const Users_1 = require("./Users");
let CommentLike = class CommentLike {
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
], CommentLike.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'UserId (Like)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommentLike.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'commentId (Liked)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommentLike.prototype, "commentId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.likeComment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", Users_1.Users)
], CommentLike.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Comments_1.Comments, (comments) => comments.likedUser, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'commentId' }),
    __metadata("design:type", Comments_1.Comments)
], CommentLike.prototype, "comment", void 0);
CommentLike = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'commentLike' })
], CommentLike);
exports.CommentLike = CommentLike;
//# sourceMappingURL=CommentLike.js.map