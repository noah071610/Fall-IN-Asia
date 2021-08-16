"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const Users_1 = require("../entities/Users");
class SocialProfileDto extends swagger_1.PickType(Users_1.Users, [
    'email',
    'name',
    'provider',
    'icon',
    'socialId',
]) {
}
exports.SocialProfileDto = SocialProfileDto;
//# sourceMappingURL=auth.dto.js.map