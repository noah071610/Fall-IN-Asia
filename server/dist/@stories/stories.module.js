"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoriesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Notices_1 = require("../entities/Notices");
const Countries_1 = require("../entities/Countries");
const Images_1 = require("../entities/Images");
const Stories_1 = require("../entities/Stories");
const StoryLike_1 = require("../entities/StoryLike");
const Users_1 = require("../entities/Users");
const stories_controller_1 = require("./stories.controller");
const stories_service_1 = require("./stories.service");
let StoriesModule = class StoriesModule {
};
StoriesModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Stories_1.Stories,
                Users_1.Users,
                Images_1.Images,
                Notices_1.Notices,
                StoryLike_1.StoryLike,
                Countries_1.Countries,
            ]),
        ],
        providers: [stories_service_1.StoriesService],
        controllers: [stories_controller_1.StoriesController],
    })
], StoriesModule);
exports.StoriesModule = StoriesModule;
//# sourceMappingURL=stories.module.js.map