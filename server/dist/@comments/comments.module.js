"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const Moments_1 = require("../entities/Moments");
const Comments_1 = require("../entities/Comments");
const Countries_1 = require("../entities/Countries");
const SubComments_1 = require("../entities/SubComments");
const Users_1 = require("../entities/Users");
const comments_controller_1 = require("./comments.controller");
const comments_service_1 = require("./comments.service");
const typeorm_1 = require("@nestjs/typeorm");
const CommentLike_1 = require("../entities/CommentLike");
const Notices_1 = require("../entities/Notices");
const Stories_1 = require("../entities/Stories");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Moments_1.Moments,
                Countries_1.Countries,
                Users_1.Users,
                Comments_1.Comments,
                SubComments_1.SubComments,
                CommentLike_1.CommentLike,
                Notices_1.Notices,
                Stories_1.Stories,
            ]),
        ],
        providers: [comments_service_1.CommentsService],
        controllers: [comments_controller_1.CommentsController],
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map