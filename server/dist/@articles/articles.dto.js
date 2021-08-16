"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleEditDto = exports.ArticleCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const Articles_1 = require("../entities/Articles");
class ArticleCreateDto extends swagger_1.PickType(Articles_1.Articles, [
    'content',
    'title',
    'region',
    'lat',
    'type',
    'lng',
]) {
}
exports.ArticleCreateDto = ArticleCreateDto;
class ArticleEditDto extends ArticleCreateDto {
}
exports.ArticleEditDto = ArticleEditDto;
//# sourceMappingURL=articles.dto.js.map