"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Articles_1 = require("../entities/Articles");
const Countries_1 = require("../entities/Countries");
const Images_1 = require("../entities/Images");
const Users_1 = require("../entities/Users");
const articles_controller_1 = require("./articles.controller");
const articles_service_1 = require("./articles.service");
let ArticlesModule = class ArticlesModule {
};
ArticlesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([Articles_1.Articles, Countries_1.Countries, Images_1.Images, Users_1.Users])],
        providers: [articles_service_1.ArticlesService],
        controllers: [articles_controller_1.ArticlesController],
    })
], ArticlesModule);
exports.ArticlesModule = ArticlesModule;
//# sourceMappingURL=articles.module.js.map