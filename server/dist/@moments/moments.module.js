"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MomentsModule = void 0;
const common_1 = require("@nestjs/common");
const moments_service_1 = require("./moments.service");
const typeorm_1 = require("@nestjs/typeorm");
const Moments_1 = require("../entities/Moments");
const Countries_1 = require("../entities/Countries");
const Users_1 = require("../entities/Users");
const Images_1 = require("../entities/Images");
const MomentLike_1 = require("../entities/MomentLike");
const Notices_1 = require("../entities/Notices");
const moments_controller_1 = require("./moments.controller");
let MomentsModule = class MomentsModule {
};
MomentsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Moments_1.Moments,
                Countries_1.Countries,
                Users_1.Users,
                Images_1.Images,
                MomentLike_1.MomentLike,
                Notices_1.Notices,
            ]),
        ],
        providers: [moments_service_1.MomentsService],
        controllers: [moments_controller_1.MomentsController],
    })
], MomentsModule);
exports.MomentsModule = MomentsModule;
//# sourceMappingURL=moments.module.js.map