"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const nest_morgan_1 = require("nest-morgan");
const users_module_1 = require("./@users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig = __importStar(require("./ormconfig"));
const auth_module_1 = require("./auth/auth.module");
const countries_module_1 = require("./@countries/countries.module");
const moments_module_1 = require("./@moments/moments.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const stories_module_1 = require("./@stories/stories.module");
const comments_module_1 = require("./@comments/comments.module");
const articles_module_1 = require("./@articles/articles.module");
const Moments_1 = require("./entities/Moments");
const Stories_1 = require("./entities/Stories");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot(),
            nest_morgan_1.MorganModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot(ormconfig),
            typeorm_1.TypeOrmModule.forFeature([Moments_1.Moments, Stories_1.Stories]),
            countries_module_1.CountriesModule,
            moments_module_1.MomentsModule,
            stories_module_1.StoriesModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'uploads'),
                exclude: ['/api*'],
                serveRoot: '/uploads',
            }),
            comments_module_1.CommentsModule,
            articles_module_1.ArticlesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: nest_morgan_1.MorganInterceptor('dev'),
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map