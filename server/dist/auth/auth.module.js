"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const pug_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/pug.adapter");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const AuthNum_1 = require("../entities/AuthNum");
const Users_1 = require("../entities/Users");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const serializer_1 = require("./serializer");
const local_strategy_1 = require("./local/local.strategy");
const google_strategy_1 = require("./google/google.strategy");
const kakao_strategy_1 = require("./kakao/kakao.strategy");
const naver_strategy_1 = require("./naver/naver.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ session: true }),
            typeorm_1.TypeOrmModule.forFeature([Users_1.Users, AuthNum_1.AuthNum]),
            mailer_1.MailerModule.forRoot({
                transport: {
                    service: 'Naver',
                    host: 'smtp.naver.com',
                    port: 587,
                    auth: {
                        user: process.env.EMAIL_ID,
                        pass: process.env.EMAIL_PASS,
                    },
                },
                template: {
                    dir: process.cwd() + '/templates',
                    adapter: new pug_adapter_1.PugAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            serializer_1.Serializer,
            google_strategy_1.GoogleStrategy,
            kakao_strategy_1.KaKaoStrategy,
            naver_strategy_1.NaverStrategy,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map