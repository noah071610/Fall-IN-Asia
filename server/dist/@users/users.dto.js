"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const Users_1 = require("../entities/Users");
class UserSignUpDto extends swagger_1.PickType(Users_1.Users, [
    'email',
    'name',
    'password',
]) {
}
exports.UserSignUpDto = UserSignUpDto;
//# sourceMappingURL=users.dto.js.map