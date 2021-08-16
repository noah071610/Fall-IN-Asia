"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MomentModifyRequestDto = exports.MomentCreateRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const Moments_1 = require("../entities/Moments");
class MomentCreateRequestDto extends swagger_1.PickType(Moments_1.Moments, [
    'code',
    'content',
    'type',
]) {
}
exports.MomentCreateRequestDto = MomentCreateRequestDto;
class MomentModifyRequestDto extends MomentCreateRequestDto {
}
exports.MomentModifyRequestDto = MomentModifyRequestDto;
//# sourceMappingURL=moments.dto.js.map