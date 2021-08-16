"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryEditDto = exports.StoryCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const Stories_1 = require("../entities/Stories");
class StoryCreateDto extends swagger_1.PickType(Stories_1.Stories, [
    'content',
    'title',
    'region',
    'code',
    'lat',
    'lng',
]) {
}
exports.StoryCreateDto = StoryCreateDto;
class StoryEditDto extends StoryCreateDto {
}
exports.StoryEditDto = StoryEditDto;
//# sourceMappingURL=stories.dto.js.map