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
exports.Comments = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const Notices_1 = require("./Notices");
const Moments_1 = require("./Moments");
const Stories_1 = require("./Stories");
const SubComments_1 = require("./SubComments");
const Users_1 = require("./Users");
const CommentLike_1 = require("./CommentLike");
let Comments = class Comments {
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
], Comments.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '코멘트 감사합니다~ ',
        description: 'subcomment on the comment',
    }),
    typeorm_1.Column('varchar', { name: 'content' }),
    __metadata("design:type", String)
], Comments.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Comments.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", Date)
], Comments.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => SubComments_1.SubComments, (subComments) => subComments.comment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Comments.prototype, "subComments", void 0);
__decorate([
    typeorm_1.OneToMany(() => Notices_1.Notices, (notices) => notices.comment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Comments.prototype, "notices", void 0);
__decorate([
    typeorm_1.OneToMany(() => CommentLike_1.CommentLike, (commentLike) => commentLike.comment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Comments.prototype, "likedUser", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'user', referencedColumnName: 'id' }]),
    __metadata("design:type", Users_1.Users)
], Comments.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Moments_1.Moments, (moments) => moments.comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'moment', referencedColumnName: 'id' }]),
    __metadata("design:type", Moments_1.Moments)
], Comments.prototype, "moment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Stories_1.Stories, (stories) => stories.comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'story', referencedColumnName: 'id' }]),
    __metadata("design:type", Stories_1.Stories)
], Comments.prototype, "story", void 0);
Comments = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'comments' })
], Comments);
exports.Comments = Comments;
//# sourceMappingURL=Comments.js.map