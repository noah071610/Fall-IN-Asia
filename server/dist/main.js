/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?100";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 0;
	var log = __webpack_require__(1);

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function (updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(2)(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function (err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + log.formatError(err));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log("warning", "[HMR] Update failed: " + log.formatError(err));
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}


/***/ }),
/* 1 */
/***/ ((module) => {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
	logLevel = level;
};

module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(1);

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const http_exception_filter_1 = __webpack_require__(4);
const core_1 = __webpack_require__(6);
const swagger_1 = __webpack_require__(7);
const app_module_1 = __webpack_require__(8);
const cookie_parser_1 = __importDefault(__webpack_require__(87));
const passport_1 = __importDefault(__webpack_require__(88));
const express_session_1 = __importDefault(__webpack_require__(89));
const common_1 = __webpack_require__(5);
const helmet_1 = __importDefault(__webpack_require__(90));
const csurf_1 = __importDefault(__webpack_require__(91));
const hpp_1 = __importDefault(__webpack_require__(92));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
    const port = process.env.PORT || 3060;
    const prod = process.env.NODE_ENV === 'production';
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Fall IN Asia')
        .setDescription('우리들만의 작은 여행 커뮤니티')
        .setVersion('1.0')
        .addCookieAuth('connect.sid')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(cookie_parser_1.default(process.env.COOKIE_SECRET));
    app.use(express_session_1.default({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: prod ? true : false,
            domain: prod && process.env.CLIENT_DOMAIN_URL,
            maxAge: 1000 * 60 * 60,
        },
        proxy: prod ? true : false,
    }));
    if (prod) {
        app.set('trust proxy', 1);
        app.use(helmet_1.default({ contentSecurityPolicy: false }));
        app.use(csurf_1.default());
        app.use(hpp_1.default());
        app.enableCors({
            origin: process.env.CLIENT_URL,
            credentials: true,
        });
        setTimeout(() => {
            console.log('############### production on');
        }, 3000);
    }
    else {
        app.enableCors({
            origin: true,
            credentials: true,
        });
        setTimeout(() => {
            console.log('############### production off');
        }, 3000);
    }
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    await app.listen(port);
    console.log(`################## Port number ${port}`);
}
bootstrap();


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(5);
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const err = exception.getResponse();
        if (typeof err !== 'string' && err.error === 'Bad Request') {
            return response.status(status).json({
                success: false,
                code: status,
                data: err.message,
            });
        }
        response.status(status).json({
            success: false,
            code: status,
            data: err,
        });
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;


/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/swagger");

/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(5);
const app_controller_1 = __webpack_require__(9);
const app_service_1 = __webpack_require__(10);
const config_1 = __webpack_require__(29);
const core_1 = __webpack_require__(6);
const nest_morgan_1 = __webpack_require__(30);
const users_module_1 = __webpack_require__(31);
const typeorm_1 = __webpack_require__(11);
const ormconfig = __importStar(__webpack_require__(48));
const auth_module_1 = __webpack_require__(49);
const countries_module_1 = __webpack_require__(66);
const moments_module_1 = __webpack_require__(70);
const serve_static_1 = __webpack_require__(74);
const path_1 = __webpack_require__(35);
const stories_module_1 = __webpack_require__(75);
const comments_module_1 = __webpack_require__(79);
const articles_module_1 = __webpack_require__(83);
const Moments_1 = __webpack_require__(13);
const Stories_1 = __webpack_require__(17);
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


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(7);
const app_service_1 = __webpack_require__(10);
const json_respone_middleware_1 = __webpack_require__(27);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getSearchPosts(searchWord) {
        return await this.appService.getSearchPosts(decodeURIComponent(searchWord));
    }
};
__decorate([
    common_1.Get('/search/:searchWord'),
    __param(0, common_1.Param('searchWord')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getSearchPosts", null);
AppController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('fall IN Asia'),
    common_1.Controller('/api'),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(11);
const typeorm_2 = __webpack_require__(12);
const Moments_1 = __webpack_require__(13);
const Stories_1 = __webpack_require__(17);
let AppService = class AppService {
    constructor(MomentsRepository, StoriesRepository) {
        this.MomentsRepository = MomentsRepository;
        this.StoriesRepository = StoriesRepository;
    }
    welcomeFallInAsia() {
        return 'Hello Fall IN Asia! 코로나 끝나면 우리 모두 여행가자~!';
    }
    async getSearchPosts(searchWord) {
        const moments = await this.MomentsRepository.createQueryBuilder('moments')
            .leftJoinAndSelect('moments.country', 'country')
            .leftJoinAndSelect('moments.user', 'user')
            .where(`MATCH(content) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
            .getMany();
        const stories = await this.StoriesRepository.createQueryBuilder('stories')
            .select(['stories.title', 'stories.thumbnail', 'stories.id'])
            .leftJoinAndSelect('stories.country', 'country')
            .leftJoinAndSelect('stories.comments', 'comments')
            .leftJoinAndSelect('stories.likedUser', 'likedUser')
            .leftJoinAndSelect('stories.user', 'user')
            .where(`MATCH(stories.content) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
            .orWhere(`MATCH(stories.region) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
            .orWhere(`MATCH(stories.title) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
            .getMany();
        return { searchWord, moments, stories };
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Moments_1.Moments)),
    __param(1, typeorm_1.InjectRepository(Stories_1.Stories)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], AppService);
exports.AppService = AppService;


/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/typeorm");

/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";
module.exports = require("typeorm");

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Moments = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Notices_1 = __webpack_require__(15);
const MomentLike_1 = __webpack_require__(22);
const Comments_1 = __webpack_require__(16);
const Countries_1 = __webpack_require__(18);
const Images_1 = __webpack_require__(20);
const Users_1 = __webpack_require__(21);
let Moments = class Moments {
};
__decorate([
    typeorm_1.Index(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Moments.prototype, "id", void 0);
__decorate([
    typeorm_1.Index(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'KOR',
        description: 'country code for url or query by using English',
    }),
    typeorm_1.Column('varchar', { name: 'code' }),
    __metadata("design:type", String)
], Moments.prototype, "code", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 125,
        description: 'hit number each post',
    }),
    typeorm_1.Column('int', { name: 'hit', default: 0 }),
    __metadata("design:type", Number)
], Moments.prototype, "hit", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '관광 및 여행',
        description: 'type for main post ',
    }),
    typeorm_1.Column('enum', {
        name: 'type',
        enum: ['한인 커뮤니티', '여행정보 공유', '사기 경보', '동행자 모집'],
    }),
    __metadata("design:type", String)
], Moments.prototype, "type", void 0);
__decorate([
    typeorm_1.Index(['content'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '제가 물어볼게있습니다! 저는 태국을 여행하는..',
        description: 'content in the main post',
    }),
    typeorm_1.Column('longtext', { name: 'content' }),
    __metadata("design:type", String)
], Moments.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Moments.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Moments.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Notices_1.Notices, (notices) => notices.moment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Moments.prototype, "notices", void 0);
__decorate([
    typeorm_1.OneToMany(() => Images_1.Images, (images) => images.moment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Moments.prototype, "images", void 0);
__decorate([
    typeorm_1.OneToMany(() => MomentLike_1.MomentLike, (momentLike) => momentLike.moment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Moments.prototype, "likedUser", void 0);
__decorate([
    typeorm_1.OneToMany(() => Comments_1.Comments, (comments) => comments.moment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Moments.prototype, "comments", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Countries_1.Countries, (countries) => countries.moments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'country', referencedColumnName: 'id' }),
    __metadata("design:type", typeof (_c = typeof Countries_1.Countries !== "undefined" && Countries_1.Countries) === "function" ? _c : Object)
], Moments.prototype, "country", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.moments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'user', referencedColumnName: 'id' }),
    __metadata("design:type", typeof (_d = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _d : Object)
], Moments.prototype, "user", void 0);
Moments = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'moment' })
], Moments);
exports.Moments = Moments;


/***/ }),
/* 14 */
/***/ ((module) => {

"use strict";
module.exports = require("class-validator");

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Notices = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Comments_1 = __webpack_require__(16);
const Moments_1 = __webpack_require__(13);
const Stories_1 = __webpack_require__(17);
const Users_1 = __webpack_require__(21);
let Notices = class Notices {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Notices.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'KOR',
        description: 'country code',
        nullable: true,
    }),
    typeorm_1.Column('varchar', { name: 'code', nullable: true }),
    __metadata("design:type", String)
], Notices.prototype, "code", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'user id (not null)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Notices.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'moment notices',
        nullable: true,
    }),
    typeorm_1.Column('int', { name: 'momentId', nullable: true }),
    __metadata("design:type", Number)
], Notices.prototype, "momentId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'story notices',
        nullable: true,
    }),
    typeorm_1.Column('int', { name: 'storyId', nullable: true }),
    __metadata("design:type", Number)
], Notices.prototype, "storyId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'comment notices',
        nullable: true,
    }),
    typeorm_1.Column('int', { name: 'commentId', nullable: true }),
    __metadata("design:type", Number)
], Notices.prototype, "commentId", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '헝가리/유학/모멘트',
        description: 'notice header ',
    }),
    typeorm_1.Column('varchar', { name: 'header' }),
    __metadata("design:type", String)
], Notices.prototype, "header", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '12번 포스트에 댓글을 남기셨습니다.',
        description: 'notice content',
    }),
    typeorm_1.Column('varchar', { name: 'content' }),
    __metadata("design:type", String)
], Notices.prototype, "content", void 0);
__decorate([
    class_validator_1.IsDate(),
    swagger_1.ApiProperty({
        example: '2020/08/03',
        description: 'if read notice , check date',
        nullable: true,
    }),
    typeorm_1.Column('date', { name: 'readAt', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Notices.prototype, "readAt", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Notices.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Notices.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.notices, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'userId', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_d = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _d : Object)
], Notices.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Moments_1.Moments, (moments) => moments.notices, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        nullable: true,
    }),
    typeorm_1.JoinColumn({ name: 'momentId' }),
    __metadata("design:type", typeof (_e = typeof Moments_1.Moments !== "undefined" && Moments_1.Moments) === "function" ? _e : Object)
], Notices.prototype, "moment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Stories_1.Stories, (stories) => stories.notices, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        nullable: true,
    }),
    typeorm_1.JoinColumn({ name: 'storyId' }),
    __metadata("design:type", typeof (_f = typeof Stories_1.Stories !== "undefined" && Stories_1.Stories) === "function" ? _f : Object)
], Notices.prototype, "story", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Comments_1.Comments, (comments) => comments.notices, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        nullable: true,
    }),
    typeorm_1.JoinColumn({ name: 'commentId' }),
    __metadata("design:type", typeof (_g = typeof Comments_1.Comments !== "undefined" && Comments_1.Comments) === "function" ? _g : Object)
], Notices.prototype, "comment", void 0);
Notices = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'notice' })
], Notices);
exports.Notices = Notices;


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Comments = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Notices_1 = __webpack_require__(15);
const Moments_1 = __webpack_require__(13);
const Stories_1 = __webpack_require__(17);
const SubComments_1 = __webpack_require__(23);
const Users_1 = __webpack_require__(21);
const CommentLike_1 = __webpack_require__(26);
let Comments = class Comments {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Comments.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '코멘트 감사합니다~ ',
        description: 'subcomment on the comment',
    }),
    typeorm_1.Column('varchar', { name: 'content' }),
    __metadata("design:type", String)
], Comments.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Comments.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Comments.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => SubComments_1.SubComments, (subComments) => subComments.comment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Comments.prototype, "subComments", void 0);
__decorate([
    typeorm_1.OneToMany(() => Notices_1.Notices, (notices) => notices.comment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Comments.prototype, "notices", void 0);
__decorate([
    typeorm_1.OneToMany(() => CommentLike_1.CommentLike, (commentLike) => commentLike.comment, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Comments.prototype, "likedUser", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'user', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_c = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _c : Object)
], Comments.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Moments_1.Moments, (moments) => moments.comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'moment', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_d = typeof Moments_1.Moments !== "undefined" && Moments_1.Moments) === "function" ? _d : Object)
], Comments.prototype, "moment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Stories_1.Stories, (stories) => stories.comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'story', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_e = typeof Stories_1.Stories !== "undefined" && Stories_1.Stories) === "function" ? _e : Object)
], Comments.prototype, "story", void 0);
Comments = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'comments' })
], Comments);
exports.Comments = Comments;


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stories = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Notices_1 = __webpack_require__(15);
const Comments_1 = __webpack_require__(16);
const Countries_1 = __webpack_require__(18);
const Images_1 = __webpack_require__(20);
const StoryLike_1 = __webpack_require__(24);
const Users_1 = __webpack_require__(21);
let Stories = class Stories {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Stories.prototype, "id", void 0);
__decorate([
    typeorm_1.Index(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'KOR',
        description: 'country code for url or query by using English',
    }),
    typeorm_1.Column('varchar', { name: 'code' }),
    __metadata("design:type", String)
], Stories.prototype, "code", void 0);
__decorate([
    typeorm_1.Index(['region'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '다합 , dahab',
        description: 'region where user visited',
    }),
    typeorm_1.Column('varchar', { name: 'region' }),
    __metadata("design:type", String)
], Stories.prototype, "region", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '133.2342345',
        description: 'latitute of region',
    }),
    typeorm_1.Column('float', { name: 'lat' }),
    __metadata("design:type", Number)
], Stories.prototype, "lat", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '53.2342345',
        description: 'longitude of region',
    }),
    typeorm_1.Column('float', { name: 'lng' }),
    __metadata("design:type", Number)
], Stories.prototype, "lng", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://upload/images/03420204.blob',
        description: 'one picture of thumbnail for story',
        nullable: true,
    }),
    typeorm_1.Column('longtext', { name: 'thumbnail', nullable: true }),
    __metadata("design:type", String)
], Stories.prototype, "thumbnail", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 125,
        description: 'hit number each post',
    }),
    typeorm_1.Column('int', { name: 'hit', default: 0 }),
    __metadata("design:type", Number)
], Stories.prototype, "hit", void 0);
__decorate([
    typeorm_1.Index(['title'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '아유타야 연대기 1화 ...',
        description: 'title for post',
    }),
    typeorm_1.Column('varchar', { name: 'title', length: 50 }),
    __metadata("design:type", String)
], Stories.prototype, "title", void 0);
__decorate([
    typeorm_1.Index(['content'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '태국에 처음 놀러갔을때 크게 놀랐던게 있습니다. 그건...',
        description: 'content in the post',
    }),
    typeorm_1.Column('longtext', { name: 'content' }),
    __metadata("design:type", String)
], Stories.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Stories.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Stories.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Notices_1.Notices, (notices) => notices.story, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Stories.prototype, "notices", void 0);
__decorate([
    typeorm_1.OneToMany(() => Images_1.Images, (images) => images.story, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Stories.prototype, "images", void 0);
__decorate([
    typeorm_1.OneToMany(() => StoryLike_1.StoryLike, (storyLike) => storyLike.story, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Stories.prototype, "likedUser", void 0);
__decorate([
    typeorm_1.OneToMany(() => Comments_1.Comments, (comments) => comments.story, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Stories.prototype, "comments", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Countries_1.Countries, (countries) => countries.moments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'country', referencedColumnName: 'id' }),
    __metadata("design:type", typeof (_c = typeof Countries_1.Countries !== "undefined" && Countries_1.Countries) === "function" ? _c : Object)
], Stories.prototype, "country", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.stories, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'user', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_d = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _d : Object)
], Stories.prototype, "user", void 0);
Stories = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'stories' })
], Stories);
exports.Stories = Stories;


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Countries = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Moments_1 = __webpack_require__(13);
const Articles_1 = __webpack_require__(19);
const Stories_1 = __webpack_require__(17);
let Countries = class Countries {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Countries.prototype, "id", void 0);
__decorate([
    typeorm_1.Index(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'KOR',
        description: 'country code for url or query by using English',
    }),
    typeorm_1.Column('varchar', { name: 'code' }),
    __metadata("design:type", String)
], Countries.prototype, "code", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '태국',
        description: 'country name especially wrote down in korean Language  ',
    }),
    typeorm_1.Column('varchar', { name: 'name', length: 20 }),
    __metadata("design:type", String)
], Countries.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '동북아시아',
        description: 'continent each country',
    }),
    typeorm_1.Column('enum', {
        name: 'continent',
        enum: ['동북아시아', '동남아시아', '남아시아'],
    }),
    __metadata("design:type", String)
], Countries.prototype, "continent", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://domain.com/uploads/239483294.jpg',
        description: 'image src for country introduce',
    }),
    typeorm_1.Column('longtext', { name: 'image_src' }),
    __metadata("design:type", String)
], Countries.prototype, "image_src", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://domain.com/uploads/239483294.jpg',
        description: 'flag src for country introduce',
    }),
    typeorm_1.Column('longtext', { name: 'flag_src' }),
    __metadata("design:type", String)
], Countries.prototype, "flag_src", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Countries.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Countries.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Moments_1.Moments, (moments) => moments.country),
    __metadata("design:type", Array)
], Countries.prototype, "moments", void 0);
__decorate([
    typeorm_1.OneToMany(() => Articles_1.Articles, (articles) => articles.country),
    __metadata("design:type", Array)
], Countries.prototype, "articles", void 0);
__decorate([
    typeorm_1.OneToMany(() => Stories_1.Stories, (stories) => stories.country),
    __metadata("design:type", Array)
], Countries.prototype, "stories", void 0);
Countries = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'countries' })
], Countries);
exports.Countries = Countries;


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Articles = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Countries_1 = __webpack_require__(18);
const Images_1 = __webpack_require__(20);
const Users_1 = __webpack_require__(21);
let Articles = class Articles {
};
__decorate([
    typeorm_1.Index(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Articles.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty({
        example: 4,
        description: 'ranking number for article recommendation',
        nullable: true,
    }),
    typeorm_1.Column({ type: 'int', name: 'ranking', nullable: true }),
    __metadata("design:type", Number)
], Articles.prototype, "ranking", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({
        example: '지금 인기!',
        description: 'ranking number for article recommendation',
        nullable: true,
    }),
    typeorm_1.Column('varchar', { name: 'label', nullable: true }),
    __metadata("design:type", String)
], Articles.prototype, "label", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '관광뉴스',
        description: 'articles type',
    }),
    typeorm_1.Column('enum', {
        name: 'type',
        enum: ['관광뉴스', '트렌드', '쇼핑', '이색체험', '이벤트'],
    }),
    __metadata("design:type", String)
], Articles.prototype, "type", void 0);
__decorate([
    typeorm_1.Index(['region'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '다합 , dahab',
        description: 'region for articles',
    }),
    typeorm_1.Column('varchar', { name: 'region' }),
    __metadata("design:type", String)
], Articles.prototype, "region", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '133.2342345',
        description: 'latitute of region',
    }),
    typeorm_1.Column('float', { name: 'lat' }),
    __metadata("design:type", Number)
], Articles.prototype, "lat", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '53.2342345',
        description: 'longitude of region',
    }),
    typeorm_1.Column('float', { name: 'lng' }),
    __metadata("design:type", Number)
], Articles.prototype, "lng", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://upload/images/03420204.blob',
        description: 'one picture of thumbnail for article',
        nullable: true,
    }),
    typeorm_1.Column('longtext', { name: 'thumbnail', nullable: true }),
    __metadata("design:type", String)
], Articles.prototype, "thumbnail", void 0);
__decorate([
    typeorm_1.Index(['title'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '꼭 가봐야하는 이색체험 명소 ...',
        description: 'title for news',
    }),
    typeorm_1.Column('varchar', { name: 'title', length: 50 }),
    __metadata("design:type", String)
], Articles.prototype, "title", void 0);
__decorate([
    typeorm_1.Index(['content'], { fulltext: true, parser: 'ngram' }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '태국에 처음 놀러갔을때 크게 놀랐던게 있습니다. 그건...',
        description: 'content in the news',
    }),
    typeorm_1.Column('longtext', { name: 'content' }),
    __metadata("design:type", String)
], Articles.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Articles.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Articles.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Images_1.Images, (images) => images.article, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Articles.prototype, "images", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Countries_1.Countries, (countries) => countries.articles, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'country', referencedColumnName: 'id' }),
    __metadata("design:type", typeof (_c = typeof Countries_1.Countries !== "undefined" && Countries_1.Countries) === "function" ? _c : Object)
], Articles.prototype, "country", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.articles, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'user', referencedColumnName: 'id' }),
    __metadata("design:type", typeof (_d = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _d : Object)
], Articles.prototype, "user", void 0);
Articles = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'articles' })
], Articles);
exports.Articles = Articles;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Images = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Articles_1 = __webpack_require__(19);
const Moments_1 = __webpack_require__(13);
const Stories_1 = __webpack_require__(17);
let Images = class Images {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Images.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'http://domain.com/uploads/239483294.jpg',
        description: 'image src',
    }),
    typeorm_1.Column('longtext', { name: 'image_src' }),
    __metadata("design:type", String)
], Images.prototype, "image_src", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Images.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Images.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Stories_1.Stories, (stories) => stories.images, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'story', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_c = typeof Stories_1.Stories !== "undefined" && Stories_1.Stories) === "function" ? _c : Object)
], Images.prototype, "story", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Moments_1.Moments, (moments) => moments.images, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'moment', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_d = typeof Moments_1.Moments !== "undefined" && Moments_1.Moments) === "function" ? _d : Object)
], Images.prototype, "moment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Articles_1.Articles, (articles) => articles.images, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'article', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_e = typeof Articles_1.Articles !== "undefined" && Articles_1.Articles) === "function" ? _e : Object)
], Images.prototype, "article", void 0);
Images = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'images' })
], Images);
exports.Images = Images;


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Users = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Moments_1 = __webpack_require__(13);
const Comments_1 = __webpack_require__(16);
const Stories_1 = __webpack_require__(17);
const MomentLike_1 = __webpack_require__(22);
const Notices_1 = __webpack_require__(15);
const SubComments_1 = __webpack_require__(23);
const StoryLike_1 = __webpack_require__(24);
const Follow_1 = __webpack_require__(25);
const CommentLike_1 = __webpack_require__(26);
const Articles_1 = __webpack_require__(19);
let Users = class Users {
};
__decorate([
    typeorm_1.Index(),
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: '394823049802',
        description: 'socialId',
    }),
    typeorm_1.Column('varchar', {
        unique: true,
        select: false,
        name: 'socialId',
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "socialId", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'google',
        description: 'provider from social media',
    }),
    typeorm_1.Column('varchar', {
        select: false,
        name: 'provider',
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "provider", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'noah071610@naver.com',
        description: 'email (if they login or signup with social, it`s not necessary)',
        nullable: true,
    }),
    typeorm_1.Column('varchar', {
        name: 'email',
        select: false,
        unique: true,
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '장현수',
        description: 'name',
    }),
    typeorm_1.Column('varchar', { name: 'name', length: 30 }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '안녕하세요 여행을 너무 사랑하는 노아입니다. 일본과 태국 여행을 좋아합니다.',
        description: 'introduce',
    }),
    typeorm_1.Column('varchar', { name: 'introduce' }),
    __metadata("design:type", String)
], Users.prototype, "introduce", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({
        example: 'https://images.com/324324231',
        description: 'icon url',
    }),
    typeorm_1.Column('varchar', {
        name: 'icon',
        default: 'https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png',
    }),
    __metadata("design:type", String)
], Users.prototype, "icon", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty({
        example: '320sd8f78f2300dsa',
        description: 'Password',
        nullable: true,
    }),
    typeorm_1.Column('varchar', {
        name: 'password',
        length: 100,
        select: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'admin',
    }),
    typeorm_1.Column('boolean', { name: 'admin', select: false, default: false }),
    __metadata("design:type", Boolean)
], Users.prototype, "admin", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Users.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Users.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.DeleteDateColumn({ select: false }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Users.prototype, "deletedAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Follow_1.Follow, (follow) => follow.following, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "followers", void 0);
__decorate([
    typeorm_1.OneToMany(() => Follow_1.Follow, (follow) => follow.follower, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "followings", void 0);
__decorate([
    typeorm_1.OneToMany(() => Moments_1.Moments, (moments) => moments.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "moments", void 0);
__decorate([
    typeorm_1.OneToMany(() => Stories_1.Stories, (stories) => stories.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "stories", void 0);
__decorate([
    typeorm_1.OneToMany(() => Articles_1.Articles, (articles) => articles.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "articles", void 0);
__decorate([
    typeorm_1.OneToMany(() => Comments_1.Comments, (comments) => comments.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "comments", void 0);
__decorate([
    typeorm_1.OneToMany(() => SubComments_1.SubComments, (subComments) => subComments.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "subComments", void 0);
__decorate([
    typeorm_1.OneToMany(() => MomentLike_1.MomentLike, (momentLike) => momentLike.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "likeMoment", void 0);
__decorate([
    typeorm_1.OneToMany(() => CommentLike_1.CommentLike, (commentLike) => commentLike.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "likeComment", void 0);
__decorate([
    typeorm_1.OneToMany(() => StoryLike_1.StoryLike, (storyLike) => storyLike.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "likeStory", void 0);
__decorate([
    typeorm_1.OneToMany(() => Notices_1.Notices, (notices) => notices.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Users.prototype, "notices", void 0);
Users = __decorate([
    typeorm_1.Index('email', ['email'], { unique: true }),
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'users' })
], Users);
exports.Users = Users;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MomentLike = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Moments_1 = __webpack_require__(13);
const Users_1 = __webpack_require__(21);
let MomentLike = class MomentLike {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], MomentLike.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'UserId (Like)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MomentLike.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'momentId (Liked)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MomentLike.prototype, "momentId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.likeMoment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", typeof (_a = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _a : Object)
], MomentLike.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Moments_1.Moments, (moments) => moments.likedUser, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'momentId' }),
    __metadata("design:type", typeof (_b = typeof Moments_1.Moments !== "undefined" && Moments_1.Moments) === "function" ? _b : Object)
], MomentLike.prototype, "moment", void 0);
MomentLike = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'momentLike' })
], MomentLike);
exports.MomentLike = MomentLike;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubComments = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Comments_1 = __webpack_require__(16);
const Users_1 = __webpack_require__(21);
let SubComments = class SubComments {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], SubComments.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'コメントありがとう！',
        description: 'subcomment on the comment',
    }),
    typeorm_1.Column('varchar', { name: 'content' }),
    __metadata("design:type", String)
], SubComments.prototype, "content", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], SubComments.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ select: false }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], SubComments.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Comments_1.Comments, (comments) => comments.subComments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'comment', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_c = typeof Comments_1.Comments !== "undefined" && Comments_1.Comments) === "function" ? _c : Object)
], SubComments.prototype, "comment", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.subComments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn([{ name: 'user', referencedColumnName: 'id' }]),
    __metadata("design:type", typeof (_d = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _d : Object)
], SubComments.prototype, "user", void 0);
SubComments = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'subComments' })
], SubComments);
exports.SubComments = SubComments;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoryLike = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Stories_1 = __webpack_require__(17);
const Users_1 = __webpack_require__(21);
let StoryLike = class StoryLike {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], StoryLike.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'UserId (Like)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], StoryLike.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'storyId (Liked)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], StoryLike.prototype, "storyId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.likeStory, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", typeof (_a = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _a : Object)
], StoryLike.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Stories_1.Stories, (stories) => stories.likedUser, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'storyId' }),
    __metadata("design:type", typeof (_b = typeof Stories_1.Stories !== "undefined" && Stories_1.Stories) === "function" ? _b : Object)
], StoryLike.prototype, "story", void 0);
StoryLike = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'storyLike' })
], StoryLike);
exports.StoryLike = StoryLike;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Follow = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Users_1 = __webpack_require__(21);
let Follow = class Follow {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Follow.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'followingId (Following)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Follow.prototype, "followingId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'followerId (Follower)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Follow.prototype, "followerId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.followings, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'followingId' }),
    __metadata("design:type", typeof (_a = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _a : Object)
], Follow.prototype, "following", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.followers, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'followerId' }),
    __metadata("design:type", typeof (_b = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _b : Object)
], Follow.prototype, "follower", void 0);
Follow = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'follow' })
], Follow);
exports.Follow = Follow;


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentLike = void 0;
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(12);
const Comments_1 = __webpack_require__(16);
const Users_1 = __webpack_require__(21);
let CommentLike = class CommentLike {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'ID',
    }),
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], CommentLike.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'UserId (Like)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommentLike.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 1,
        description: 'commentId (Liked)',
    }),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CommentLike.prototype, "commentId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, (users) => users.likeComment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", typeof (_a = typeof Users_1.Users !== "undefined" && Users_1.Users) === "function" ? _a : Object)
], CommentLike.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Comments_1.Comments, (comments) => comments.likedUser, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'commentId' }),
    __metadata("design:type", typeof (_b = typeof Comments_1.Comments !== "undefined" && Comments_1.Comments) === "function" ? _b : Object)
], CommentLike.prototype, "comment", void 0);
CommentLike = __decorate([
    typeorm_1.Entity({ schema: 'fall-in-asia', name: 'commentLike' })
], CommentLike);
exports.CommentLike = CommentLike;


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JsonResponeGenerator = void 0;
const common_1 = __webpack_require__(5);
const operators_1 = __webpack_require__(28);
let JsonResponeGenerator = class JsonResponeGenerator {
    intercept(ctx, next) {
        return next.handle().pipe(operators_1.map((data) => ({ data, message: 'success' })));
    }
};
JsonResponeGenerator = __decorate([
    common_1.Injectable()
], JsonResponeGenerator);
exports.JsonResponeGenerator = JsonResponeGenerator;


/***/ }),
/* 28 */
/***/ ((module) => {

"use strict";
module.exports = require("rxjs/operators");

/***/ }),
/* 29 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/config");

/***/ }),
/* 30 */
/***/ ((module) => {

"use strict";
module.exports = require("nest-morgan");

/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const Follow_1 = __webpack_require__(25);
const typeorm_1 = __webpack_require__(11);
const common_1 = __webpack_require__(5);
const users_controller_1 = __webpack_require__(32);
const users_service_1 = __webpack_require__(42);
const Users_1 = __webpack_require__(21);
const Notices_1 = __webpack_require__(15);
const AuthNum_1 = __webpack_require__(44);
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([Users_1.Users, Follow_1.Follow, Notices_1.Notices, AuthNum_1.AuthNum])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(5);
const platform_express_1 = __webpack_require__(33);
const swagger_1 = __webpack_require__(7);
const express_1 = __webpack_require__(34);
const path_1 = __importDefault(__webpack_require__(35));
const local_auth_guard_1 = __webpack_require__(36);
const logged_in_guard_1 = __webpack_require__(38);
const not_logged_in_guard_1 = __webpack_require__(39);
const user_decorator_1 = __webpack_require__(40);
const users_dto_1 = __webpack_require__(41);
const json_respone_middleware_1 = __webpack_require__(27);
const users_service_1 = __webpack_require__(42);
const multer_s3_1 = __importDefault(__webpack_require__(45));
const aws_sdk_1 = __importDefault(__webpack_require__(46));
const dotenv_1 = __importDefault(__webpack_require__(47));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getUserInfo(req, user) {
        return user || false;
    }
    async getUserInfoById(userId) {
        return await this.usersService.getUserInfoById(userId);
    }
    async signUp(data) {
        return await this.usersService.signUp(data.email, data.name, data.password, data.authNum);
    }
    async logIn(user) {
        const fullUserInfo = await this.usersService.findUserInfoByEmail(user.email);
        return fullUserInfo;
    }
    async logOut(req, res) {
        res.clearCookie('connect.sid', { httpOnly: true });
        req.logout();
        return res.send('success');
    }
    async addUserIcon(user, file) {
        const addUserIcon = this.usersService.addUserIcon(user.id, file);
        return addUserIcon;
    }
    async deleteUserIcon(user) {
        const deleteUserIcon = this.usersService.deleteUserIcon(user.id);
        return deleteUserIcon;
    }
    async changeUserInfo(form, user) {
        return await this.usersService.changeUserInfo(user.id, form);
    }
    async changeUserPassword(req, res, form, user) {
        const cofirmedPassword = await this.usersService.confirmPassword(user.id, form.prevPassword);
        if (cofirmedPassword) {
            await this.usersService.changeUserPassword(user.id, form.newPassword);
            res.clearCookie('connect.sid', { httpOnly: true });
            req.logout();
            res.send('success');
            return true;
        }
    }
    async readNotice(user) {
        await this.usersService.readNotice(user.id);
        return await this.usersService.getUserInfoById(user.id);
    }
    async deleteNotice(noticeId, user) {
        await this.usersService.deleteNotice(noticeId, user.id);
        return await this.usersService.getUserInfoById(user.id);
    }
    async withdrawalUser(req, res, form, user) {
        const cofirmedPassword = await this.usersService.confirmPassword(user.id, form.password);
        if (cofirmedPassword) {
            await this.usersService.deleteUser(user.id);
            res.clearCookie('connect.sid', { httpOnly: true });
            req.logout();
            res.send('success');
            return true;
        }
    }
    async followUser(followingId, user) {
        return await this.usersService.followUser(followingId, user === null || user === void 0 ? void 0 : user.id);
    }
    async unfollowUser(followingId, user) {
        return await this.usersService.unfollowUser(followingId, user === null || user === void 0 ? void 0 : user.id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'get the user infomation' }),
    common_1.Get(),
    __param(0, common_1.Req()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserInfo", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'get specific user infomation for user page' }),
    common_1.Get(':userId'),
    __param(0, common_1.Param('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserInfoById", null);
__decorate([
    common_1.UseGuards(new not_logged_in_guard_1.NotLoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Sign up' }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof users_dto_1.UserSignUpDto !== "undefined" && users_dto_1.UserSignUpDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signUp", null);
__decorate([
    common_1.UseGuards(new local_auth_guard_1.LocalAuthGuard()),
    swagger_1.ApiOperation({ summary: 'Login' }),
    common_1.Post('logIn'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logIn", null);
__decorate([
    swagger_1.ApiCookieAuth('connect.sid'),
    swagger_1.ApiOperation({ summary: 'Logout' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('logout'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _b : Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logOut", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'change user icon' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post('icon'),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_e = typeof Express !== "undefined" && (_d = Express.MulterS3) !== void 0 && _d.File) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUserIcon", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'delete user icon' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Delete('icon'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserIcon", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'change user information' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('info'),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changeUserInfo", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'change user password' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('password'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __param(3, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _f : Object, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changeUserPassword", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('/notice'),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "readNotice", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Delete('/notice/:noticeId'),
    __param(0, common_1.Param('noticeId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteNotice", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'withdrawal user' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('withdrawal'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __param(3, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _h : Object, typeof (_j = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _j : Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "withdrawalUser", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'follow user by followingId' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('follow/:followingId'),
    __param(0, common_1.Param('followingId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "followUser", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'follow user by followingId' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Post('unfollow/:followingId'),
    __param(0, common_1.Param('followingId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "unfollowUser", null);
UsersController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('User'),
    common_1.Controller('/api/user'),
    __metadata("design:paramtypes", [typeof (_k = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _k : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),
/* 33 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/platform-express");

/***/ }),
/* 34 */
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),
/* 35 */
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(37);
let LocalAuthGuard = class LocalAuthGuard extends passport_1.AuthGuard('local') {
    async canActivate(context) {
        const can = await super.canActivate(context);
        if (can) {
            const request = context.switchToHttp().getRequest();
            await super.logIn(request);
        }
        return true;
    }
};
LocalAuthGuard = __decorate([
    common_1.Injectable()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),
/* 37 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/passport");

/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggedInGuard = void 0;
const common_1 = __webpack_require__(5);
let LoggedInGuard = class LoggedInGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return request.isAuthenticated();
    }
};
LoggedInGuard = __decorate([
    common_1.Injectable()
], LoggedInGuard);
exports.LoggedInGuard = LoggedInGuard;


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotLoggedInGuard = void 0;
const common_1 = __webpack_require__(5);
let NotLoggedInGuard = class NotLoggedInGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return !request.isAuthenticated();
    }
};
NotLoggedInGuard = __decorate([
    common_1.Injectable()
], NotLoggedInGuard);
exports.NotLoggedInGuard = NotLoggedInGuard;


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const common_1 = __webpack_require__(5);
exports.User = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSignUpDto = void 0;
const swagger_1 = __webpack_require__(7);
const Users_1 = __webpack_require__(21);
class UserSignUpDto extends swagger_1.PickType(Users_1.Users, [
    'email',
    'name',
    'password',
]) {
}
exports.UserSignUpDto = UserSignUpDto;


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(5);
const Users_1 = __webpack_require__(21);
const typeorm_1 = __webpack_require__(12);
const bcrypt_1 = __importDefault(__webpack_require__(43));
const typeorm_2 = __webpack_require__(11);
const Follow_1 = __webpack_require__(25);
const Notices_1 = __webpack_require__(15);
const AuthNum_1 = __webpack_require__(44);
let UsersService = class UsersService {
    constructor(UserRepository, FollowRepository, NoticesRepository, AuthNumRepository) {
        this.UserRepository = UserRepository;
        this.FollowRepository = FollowRepository;
        this.NoticesRepository = NoticesRepository;
        this.AuthNumRepository = AuthNumRepository;
    }
    async findUserInfoByEmail(email) {
        const user = await this.UserRepository.createQueryBuilder('users')
            .addSelect([
            'likeComment.commentId',
            'likeMoment.momentId',
            'likeStory.storyId',
        ])
            .leftJoin('users.likeStory', 'likeStory')
            .leftJoin('users.likeMoment', 'likeMoment')
            .leftJoin('users.likeComment', 'likeComment')
            .leftJoinAndSelect('users.notices', 'notices')
            .leftJoinAndSelect('users.followings', 'followings')
            .where('users.email= :email', { email })
            .getOne();
        if (!user) {
            throw new common_1.UnauthorizedException('유저정보가 없습니다. 다시한번 확인해주세요.');
        }
        return user;
    }
    async getUserInfoById(userId) {
        const user = await this.UserRepository.createQueryBuilder('users')
            .addSelect([
            'stories.code',
            'stories.title',
            'stories.lat',
            'stories.lng',
            'stories.region',
            'stories.thumbnail',
            'stories.id',
            'comments.id',
            'likedUser.id',
            's_country.code',
            's_country.flag_src',
            's_country.name',
            's_user.name',
            's_user.icon',
            's_user.id',
            'm_country.code',
            'm_country.name',
            'following.icon',
            'following.name',
            'follower.icon',
            'follower.name',
        ])
            .leftJoin('users.stories', 'stories')
            .leftJoin('stories.comments', 'comments')
            .leftJoin('stories.likedUser', 'likedUser')
            .leftJoin('stories.country', 's_country')
            .leftJoin('stories.user', 's_user')
            .leftJoinAndSelect('users.moments', 'moments')
            .leftJoin('moments.country', 'm_country')
            .leftJoinAndSelect('users.notices', 'notices')
            .leftJoinAndSelect('users.followings', 'followings')
            .leftJoinAndSelect('users.followers', 'followers')
            .leftJoin('followings.following', 'following')
            .leftJoin('followers.follower', 'follower')
            .where('users.id= :id', { id: userId })
            .getOne();
        if (!user) {
            throw new common_1.NotFoundException('유저정보가 없습니다. 다시한번 확인해주세요.');
        }
        return user;
    }
    async signUp(email, name, password, authNum) {
        if (!email) {
            throw new common_1.BadRequestException('이메일을 작성해주세요.');
        }
        if (!name) {
            throw new common_1.BadRequestException('이름을 입력해주세요.');
        }
        if (!password) {
            throw new common_1.BadRequestException('비밀번호를 작성해주세요.');
        }
        const user = await this.UserRepository.findOne({ where: { email } });
        if (user) {
            throw new common_1.UnauthorizedException('누군가 사용하고있는 이메일입니다.');
        }
        const emailAuthNum = await this.AuthNumRepository.findOne({
            where: { email, authNum: parseInt(authNum) },
        });
        if (!emailAuthNum) {
            throw new common_1.BadRequestException('이메일과 인증번호가 다릅니다. 다시한번 확인해주세요.');
        }
        else {
            await this.AuthNumRepository.delete(emailAuthNum);
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 12);
        await this.UserRepository.save({
            email,
            name,
            password: hashedPassword,
            introduce: `안녕하세요. ${name} 입니다.`,
        });
        return true;
    }
    async addUserIcon(userId, file) {
        const user = await this.UserRepository.findOne({
            where: { id: userId },
        });
        user.icon = file.location.replace(/\/original\//, '/thumb/');
        return await this.UserRepository.save(user);
    }
    async deleteUserIcon(userId) {
        const user = await this.UserRepository.findOne({
            where: { id: userId },
        });
        user.icon =
            'https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png';
        return await this.UserRepository.save(user);
    }
    async changeUserInfo(userId, form) {
        const user = await this.UserRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('유저를 찾지 못했습니다.');
        }
        user.name = form.userName;
        user.introduce = form.introduce;
        return await this.UserRepository.save(user);
    }
    async confirmPassword(userId, password) {
        const user = await this.UserRepository.findOne({
            select: ['id', 'icon', 'email', 'password'],
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('유저를 찾지 못했습니다.');
        }
        const result = await bcrypt_1.default.compare(password, user.password);
        if (result) {
            return true;
        }
        else {
            throw new common_1.UnauthorizedException('비밀번호가 일치하지 않습니다. 다시한번 확인해주세요.');
        }
    }
    async changeUserPassword(userId, newPassword) {
        const user = await this.UserRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('유저를 찾지 못했습니다.');
        }
        const myNewPassword = await bcrypt_1.default.hash(newPassword, 12);
        user.password = myNewPassword;
        return await this.UserRepository.save(user);
    }
    async deleteUser(userId) {
        return await this.UserRepository.delete({
            id: userId,
        });
    }
    async followUser(followingId, userId) {
        if (!followingId) {
            throw new common_1.NotFoundException('팔로우 할 유저를 찾지 못했습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const newFollower = new Follow_1.Follow();
        newFollower.followerId = userId;
        newFollower.followingId = followingId;
        return await this.FollowRepository.save(newFollower);
    }
    async unfollowUser(followingId, userId) {
        if (!followingId) {
            throw new common_1.NotFoundException('언팔로우를 할 유저를 찾지 못했습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        return await this.FollowRepository.delete({
            followingId,
            followerId: userId,
        });
    }
    async readNotice(userId) {
        const notices = await this.NoticesRepository.find({
            where: { userId },
        });
        if (!notices) {
            return true;
        }
        notices.forEach((v) => {
            if (v.readAt === null) {
                v.readAt = new Date();
            }
        });
        await this.NoticesRepository.save(notices);
        return true;
    }
    async deleteNotice(noticeId, userId) {
        return await this.NoticesRepository.delete({
            id: noticeId,
            userId: userId,
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(Users_1.Users)),
    __param(1, typeorm_2.InjectRepository(Follow_1.Follow)),
    __param(2, typeorm_2.InjectRepository(Notices_1.Notices)),
    __param(3, typeorm_2.InjectRepository(AuthNum_1.AuthNum)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _d : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),
/* 43 */
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthNum = void 0;
const typeorm_1 = __webpack_require__(12);
let AuthNum = class AuthNum {
};
__decorate([
    typeorm_1.PrimaryColumn({ type: 'varchar' }),
    __metadata("design:type", String)
], AuthNum.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], AuthNum.prototype, "authNum", void 0);
AuthNum = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Index(['email'])
], AuthNum);
exports.AuthNum = AuthNum;


/***/ }),
/* 45 */
/***/ ((module) => {

"use strict";
module.exports = require("multer-s3");

/***/ }),
/* 46 */
/***/ ((module) => {

"use strict";
module.exports = require("aws-sdk");

/***/ }),
/* 47 */
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),
/* 48 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(__webpack_require__(47));
const Users_1 = __webpack_require__(21);
const Stories_1 = __webpack_require__(17);
const Comments_1 = __webpack_require__(16);
const SubComments_1 = __webpack_require__(23);
const Images_1 = __webpack_require__(20);
const Notices_1 = __webpack_require__(15);
const Moments_1 = __webpack_require__(13);
const MomentLike_1 = __webpack_require__(22);
const Countries_1 = __webpack_require__(18);
const StoryLike_1 = __webpack_require__(24);
const Follow_1 = __webpack_require__(25);
const Articles_1 = __webpack_require__(19);
const CommentLike_1 = __webpack_require__(26);
const AuthNum_1 = __webpack_require__(44);
dotenv_1.default.config();
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        Users_1.Users,
        Stories_1.Stories,
        StoryLike_1.StoryLike,
        Moments_1.Moments,
        Comments_1.Comments,
        SubComments_1.SubComments,
        Images_1.Images,
        Countries_1.Countries,
        Notices_1.Notices,
        MomentLike_1.MomentLike,
        Follow_1.Follow,
        Articles_1.Articles,
        CommentLike_1.CommentLike,
        AuthNum_1.AuthNum,
    ],
    charset: 'utf8mb4',
    synchronize: false,
    logging: true,
    keepConnectionAlive: true,
};
module.exports = config;


/***/ }),
/* 49 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const mailer_1 = __webpack_require__(50);
const pug_adapter_1 = __webpack_require__(51);
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(37);
const typeorm_1 = __webpack_require__(11);
const AuthNum_1 = __webpack_require__(44);
const Users_1 = __webpack_require__(21);
const auth_controller_1 = __webpack_require__(52);
const auth_service_1 = __webpack_require__(53);
const serializer_1 = __webpack_require__(57);
const local_strategy_1 = __webpack_require__(58);
const google_strategy_1 = __webpack_require__(60);
const kakao_strategy_1 = __webpack_require__(62);
const naver_strategy_1 = __webpack_require__(64);
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


/***/ }),
/* 50 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs-modules/mailer");

/***/ }),
/* 51 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs-modules/mailer/dist/adapters/pug.adapter");

/***/ }),
/* 52 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const mailer_1 = __webpack_require__(50);
const auth_service_1 = __webpack_require__(53);
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(7);
const json_respone_middleware_1 = __webpack_require__(27);
const dotenv_1 = __importDefault(__webpack_require__(47));
const not_logged_in_guard_1 = __webpack_require__(39);
const google_auth_guard_1 = __webpack_require__(54);
const kakao_auth_guard_1 = __webpack_require__(55);
const naver_auth_guard_1 = __webpack_require__(56);
dotenv_1.default.config();
const client_url = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.CLIENT_URL;
let AuthController = class AuthController {
    constructor(AuthService, MailerService) {
        this.AuthService = AuthService;
        this.MailerService = MailerService;
    }
    async sendEmailAuthNumber(data) {
        const authNum = await this.AuthService.checkPossibleEmail(data.email);
        this.MailerService.sendMail({
            to: data.email,
            from: process.env.EMAIL_ID,
            subject: 'Fall IN Asia 이메일 인증 요청 메일입니다.',
            html: `<p>안녕하세요. Fall IN Asia 입니다. 인증번호를 보내드립니다. 인증번호를 입력하고 회원가입을 진행해주세요</p><br/><p>인증번호 : <b>${authNum}</b></p>`,
        });
        return true;
    }
    async googleAuth(req) { }
    async googleAuthRedirect(req, res) {
        res.redirect(client_url);
    }
    async kakaoAuth(req) { }
    async kakaoAuthRedirect(req, res) {
        res.redirect(client_url);
    }
    async naverAuth(req) { }
    async naverAuthRedirect(req, res) {
        res.redirect(client_url);
    }
};
__decorate([
    common_1.UseGuards(new not_logged_in_guard_1.NotLoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'send auth number for signup' }),
    common_1.Post(`email`),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendEmailAuthNumber", null);
__decorate([
    common_1.Get('google'),
    swagger_1.ApiOperation({ summary: 'try google login ' }),
    common_1.UseGuards(new google_auth_guard_1.GoogleAuthGuard()),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    common_1.Get('google/redirect'),
    swagger_1.ApiOperation({ summary: 'goolge login redirect after auth' }),
    common_1.UseGuards(new google_auth_guard_1.GoogleAuthGuard()),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    common_1.Get('kakao'),
    swagger_1.ApiOperation({ summary: 'try kakao login ' }),
    common_1.UseGuards(new kakao_auth_guard_1.KakaoAuthGuard()),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "kakaoAuth", null);
__decorate([
    common_1.Get('kakao/redirect'),
    swagger_1.ApiOperation({ summary: 'kakao login redirect after auth' }),
    common_1.UseGuards(new kakao_auth_guard_1.KakaoAuthGuard()),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "kakaoAuthRedirect", null);
__decorate([
    common_1.Get('naver'),
    swagger_1.ApiOperation({ summary: 'try naver login ' }),
    common_1.UseGuards(new naver_auth_guard_1.NaverAuthGuard()),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "naverAuth", null);
__decorate([
    common_1.Get('naver/redirect'),
    swagger_1.ApiOperation({ summary: 'naver login redirect after auth' }),
    common_1.UseGuards(new naver_auth_guard_1.NaverAuthGuard()),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "naverAuthRedirect", null);
AuthController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Auth'),
    common_1.Controller('/api/auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _b : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),
/* 53 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(11);
const bcrypt_1 = __importDefault(__webpack_require__(43));
const AuthNum_1 = __webpack_require__(44);
const typeorm_2 = __webpack_require__(12);
const Users_1 = __webpack_require__(21);
let AuthService = class AuthService {
    constructor(UserRepository, AuthNumRepository) {
        this.UserRepository = UserRepository;
        this.AuthNumRepository = AuthNumRepository;
    }
    async validateUser(email, password) {
        const user = await this.UserRepository.findOne({
            where: { email },
            select: ['id', 'icon', 'email', 'password'],
        });
        if (!user) {
            throw new common_1.UnauthorizedException('유효하지 않은 이메일입니다.');
        }
        const result = await bcrypt_1.default.compare(password, user.password);
        if (result) {
            const { password } = user, userWithoutPassword = __rest(user, ["password"]);
            return userWithoutPassword;
        }
        else {
            throw new common_1.UnauthorizedException('비밀번호가 틀렸습니다.');
        }
    }
    async validateSocialUser(profile) {
        const user = await this.UserRepository.findOne({
            where: [{ email: profile.email }, { socialId: profile.socialId }],
            select: ['id', 'icon'],
        });
        if (!user) {
            const newUser = new Users_1.Users();
            newUser.socialId = profile.socialId;
            newUser.provider = profile.provider;
            newUser.email = profile.email;
            newUser.icon = profile.icon;
            newUser.name = profile.name;
            newUser.introduce = `안녕하세요 ${profile.name}입니다.`;
            await this.UserRepository.save(newUser);
            return newUser;
        }
        return user;
    }
    async checkPossibleEmail(email) {
        if (!email) {
            throw new common_1.BadRequestException('이메일을 작성해주세요.');
        }
        const user = await this.UserRepository.findOne({ where: { email: email } });
        if (user) {
            throw new common_1.UnauthorizedException('누군가 사용하고있는 이메일입니다.');
        }
        const generateRandom = function (min, max) {
            const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
            return ranNum;
        };
        const authNum = generateRandom(111111, 999999);
        await this.AuthNumRepository.save({
            email,
            authNum,
        });
        return authNum;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Users_1.Users)),
    __param(1, typeorm_1.InjectRepository(AuthNum_1.AuthNum)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleAuthGuard = void 0;
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(37);
let GoogleAuthGuard = class GoogleAuthGuard extends passport_1.AuthGuard('google') {
    async canActivate(context) {
        const can = await super.canActivate(context);
        if (can) {
            const request = context.switchToHttp().getRequest();
            await super.logIn(request);
        }
        return true;
    }
};
GoogleAuthGuard = __decorate([
    common_1.Injectable()
], GoogleAuthGuard);
exports.GoogleAuthGuard = GoogleAuthGuard;


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KakaoAuthGuard = void 0;
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(37);
let KakaoAuthGuard = class KakaoAuthGuard extends passport_1.AuthGuard('kakao') {
    async canActivate(context) {
        const can = await super.canActivate(context);
        if (can) {
            const request = context.switchToHttp().getRequest();
            await super.logIn(request);
        }
        return true;
    }
};
KakaoAuthGuard = __decorate([
    common_1.Injectable()
], KakaoAuthGuard);
exports.KakaoAuthGuard = KakaoAuthGuard;


/***/ }),
/* 56 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NaverAuthGuard = void 0;
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(37);
let NaverAuthGuard = class NaverAuthGuard extends passport_1.AuthGuard('naver') {
    async canActivate(context) {
        const can = await super.canActivate(context);
        if (can) {
            const request = context.switchToHttp().getRequest();
            await super.logIn(request);
        }
        return true;
    }
};
NaverAuthGuard = __decorate([
    common_1.Injectable()
], NaverAuthGuard);
exports.NaverAuthGuard = NaverAuthGuard;


/***/ }),
/* 57 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Serializer = void 0;
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(37);
const typeorm_1 = __webpack_require__(11);
const typeorm_2 = __webpack_require__(12);
const Users_1 = __webpack_require__(21);
const auth_service_1 = __webpack_require__(53);
let Serializer = class Serializer extends passport_1.PassportSerializer {
    constructor(authService, usersRepository) {
        super();
        this.authService = authService;
        this.usersRepository = usersRepository;
    }
    serializeUser(user, done) {
        done(null, user.id);
    }
    async deserializeUser(userId, done) {
        return await this.usersRepository
            .createQueryBuilder('users')
            .addSelect([
            'likeComment.commentId',
            'likeMoment.momentId',
            'likeStory.storyId',
        ])
            .leftJoin('users.likeStory', 'likeStory')
            .leftJoin('users.likeMoment', 'likeMoment')
            .leftJoin('users.likeComment', 'likeComment')
            .leftJoinAndSelect('users.notices', 'notices')
            .leftJoinAndSelect('users.followings', 'followings')
            .where('users.id = :userId', { userId: +userId })
            .getOne()
            .then((user) => {
            done(null, user);
        })
            .catch((error) => done(error));
    }
};
Serializer = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(Users_1.Users)),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], Serializer);
exports.Serializer = Serializer;


/***/ }),
/* 58 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(59);
const passport_1 = __webpack_require__(37);
const common_1 = __webpack_require__(5);
const auth_service_1 = __webpack_require__(53);
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'email', passwordField: 'password' });
        this.authService = authService;
    }
    async validate(email, password, done) {
        console.log('validate on (strategy => auth.service)');
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException('이메일주소가 일치하지 않습니다. 다시한번 확인해주세요.');
        }
        console.log(`### validate done (strategy => local-auth.guard)`);
        return done(null, user);
    }
};
LocalStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),
/* 59 */
/***/ ((module) => {

"use strict";
module.exports = require("passport-local");

/***/ }),
/* 60 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleStrategy = void 0;
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(37);
const dotenv_1 = __webpack_require__(47);
const passport_google_oauth20_1 = __webpack_require__(61);
const auth_service_1 = __webpack_require__(53);
dotenv_1.config();
let GoogleStrategy = class GoogleStrategy extends passport_1.PassportStrategy(passport_google_oauth20_1.Strategy, 'google') {
    constructor(authService) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.NODE_ENV === 'development'
                ? 'http://localhost:3060'
                : process.env.BACK_URL + '/api/auth/google/redirect',
            scope: ['email', 'profile'],
        });
        this.authService = authService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { displayName, emails, photos, id } = profile;
        const user = {
            socialId: id,
            provider: 'google',
            email: emails[0].value,
            name: displayName,
            icon: photos[0].value,
        };
        const googleUser = await this.authService.validateSocialUser(user);
        return done(null, googleUser);
    }
};
GoogleStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], GoogleStrategy);
exports.GoogleStrategy = GoogleStrategy;


/***/ }),
/* 61 */
/***/ ((module) => {

"use strict";
module.exports = require("passport-google-oauth20");

/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KaKaoStrategy = void 0;
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(37);
const dotenv_1 = __webpack_require__(47);
const passport_kakao_1 = __webpack_require__(63);
const auth_service_1 = __webpack_require__(53);
dotenv_1.config();
let KaKaoStrategy = class KaKaoStrategy extends passport_1.PassportStrategy(passport_kakao_1.Strategy, 'kakao') {
    constructor(authService) {
        super({
            clientID: process.env.KAKAO_CLIENT_ID,
            clientSecret: '',
            callbackURL: process.env.NODE_ENV === 'development'
                ? 'http://localhost:3060'
                : process.env.BACK_URL + '/api/auth/kakao/redirect',
        });
        this.authService = authService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { id: socialId, username: name, _json: { properties: { profile_image }, kakao_account: { email }, }, } = profile;
        const user = {
            provider: 'kakao',
            socialId,
            email,
            name,
            icon: profile_image,
        };
        const kakaoUser = await this.authService.validateSocialUser(user);
        return done(null, kakaoUser);
    }
};
KaKaoStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], KaKaoStrategy);
exports.KaKaoStrategy = KaKaoStrategy;


/***/ }),
/* 63 */
/***/ ((module) => {

"use strict";
module.exports = require("passport-kakao");

/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NaverStrategy = void 0;
const passport_naver_1 = __webpack_require__(65);
const passport_1 = __webpack_require__(37);
const common_1 = __webpack_require__(5);
const auth_service_1 = __webpack_require__(53);
const dotenv_1 = __webpack_require__(47);
dotenv_1.config();
let NaverStrategy = class NaverStrategy extends passport_1.PassportStrategy(passport_naver_1.Strategy, 'naver') {
    constructor(authService) {
        super({
            clientID: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_SECRET,
            callbackURL: process.env.NODE_ENV === 'development'
                ? 'http://localhost:3060'
                : process.env.BACK_URL + '/api/auth/naver/redirect',
        });
        this.authService = authService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { email, nickname, id, profile_image } = profile._json;
        const user = {
            socialId: id,
            provider: 'naver',
            email,
            name: nickname,
            icon: profile_image,
        };
        const naverUser = await this.authService.validateSocialUser(user);
        return done(null, naverUser);
    }
};
NaverStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], NaverStrategy);
exports.NaverStrategy = NaverStrategy;


/***/ }),
/* 65 */
/***/ ((module) => {

"use strict";
module.exports = require("passport-naver");

/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountriesModule = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(11);
const Countries_1 = __webpack_require__(18);
const countries_controller_1 = __webpack_require__(67);
const countries_service_1 = __webpack_require__(68);
let CountriesModule = class CountriesModule {
};
CountriesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([Countries_1.Countries])],
        controllers: [countries_controller_1.CountriesController],
        providers: [countries_service_1.CountriesService],
    })
], CountriesModule);
exports.CountriesModule = CountriesModule;


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountriesController = void 0;
const countries_service_1 = __webpack_require__(68);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
const swagger_1 = __webpack_require__(7);
const json_respone_middleware_1 = __webpack_require__(27);
let CountriesController = class CountriesController {
    constructor(CountriesService) {
        this.CountriesService = CountriesService;
    }
    async getCountries() {
        const countries = await this.CountriesService.getCountries();
        return countries;
    }
    async getPopularCountries() {
        const popularCountries = await this.CountriesService.getPopularCountries();
        return popularCountries;
    }
    async getCountryInfo(code, type) {
        const countryInfo = await this.CountriesService.getCountryInfo(code, type);
        return countryInfo;
    }
    async getCountry(code) {
        const country = await this.CountriesService.getCountry(code);
        return country;
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'get Countries' }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "getCountries", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'get Countries order by popular' }),
    common_1.Get('popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "getPopularCountries", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'get information about country ' }),
    common_1.Get('info/:code/:type'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Param('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "getCountryInfo", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'get one country' }),
    common_1.Get('/:code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "getCountry", null);
CountriesController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Countries'),
    common_2.Controller('/api/country'),
    __metadata("design:paramtypes", [typeof (_a = typeof countries_service_1.CountriesService !== "undefined" && countries_service_1.CountriesService) === "function" ? _a : Object])
], CountriesController);
exports.CountriesController = CountriesController;


/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountriesService = void 0;
const axios_1 = __importDefault(__webpack_require__(69));
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(11);
const Countries_1 = __webpack_require__(18);
const typeorm_2 = __webpack_require__(12);
const dotenv_1 = __importDefault(__webpack_require__(47));
dotenv_1.default.config();
let CountriesService = class CountriesService {
    constructor(CountriesRepository) {
        this.CountriesRepository = CountriesRepository;
    }
    async getCountries() {
        const countries = await this.CountriesRepository.createQueryBuilder('country')
            .addSelect(['moments.id', 'stories.id'])
            .leftJoin('country.moments', 'moments')
            .leftJoin('country.stories', 'stories')
            .getMany();
        if (!countries) {
            throw new common_1.NotFoundException('예상치못한 에러가 발생했습니다.');
        }
        return countries;
    }
    async getPopularCountries() {
        const countriesWithPoint = await this.CountriesRepository.createQueryBuilder('country')
            .addSelect(['moments.id', 'stories.id'])
            .leftJoin('country.moments', 'moments')
            .leftJoin('country.stories', 'stories')
            .getMany()
            .then((res) => {
            return res
                .map((v) => {
                return {
                    code: v.code,
                    point: v.moments.length * 1 + v.stories.length * 10,
                };
            })
                .sort((a, b) => b.point - a.point)
                .splice(0, 10);
        });
        if (!countriesWithPoint) {
            throw new common_1.NotFoundException('예상치못한 에러가 발생했습니다.');
        }
        let countriesOrderByPopularity = [];
        for (const i of countriesWithPoint) {
            await this.CountriesRepository.findOne({
                where: { code: i.code },
                relations: ['moments'],
            }).then((res) => {
                countriesOrderByPopularity.push(res);
            });
        }
        return countriesOrderByPopularity;
    }
    async getCountry(code) {
        const country = await this.CountriesRepository.createQueryBuilder('country')
            .where('country.code = :code', { code })
            .addSelect(['moments.id', 'stories.id'])
            .leftJoin('country.moments', 'moments')
            .leftJoin('country.stories', 'stories')
            .getOne();
        if (!country) {
            throw new common_1.NotFoundException('예상치못한 에러가 발생했습니다.');
        }
        return country;
    }
    async getCountryInfo(code, type) {
        let type2url = '';
        switch (type) {
            case 'covidInfo':
                type2url = 'CountryCovid19SafetyServiceNew/getCountrySafetyNewsListNew';
                break;
            case 'safeInfo':
                type2url = "'CountrySafetyService2/getCountrySafetyList2";
                break;
            default:
                break;
        }
        if (!type2url) {
            throw new common_1.NotFoundException('정보를 불러오는데 실패했습니다.');
        }
        const country_info = await axios_1.default
            .get(`http://apis.data.go.kr/1262000/${type2url}?serviceKey=${process.env.OPEN_DATA_API_KEY}&returnType=JSON&numOfRows=10&pageNo=1&cond[country_iso_alp2::EQ]=${code}`)
            .then((res) => {
            if (type === 'covidInfo') {
                return {
                    content: res.data.data[0].html_origin_cn,
                };
            }
            if (type === 'safeInfo') {
                return {
                    content: res.data.data[0].txt_origin_cn,
                };
            }
        })
            .catch(() => {
            throw new common_1.InternalServerErrorException('서버에 오류가 발생했습니다. 불편을 드려 죄송합니다.');
        });
        return country_info;
    }
};
CountriesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Countries_1.Countries)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CountriesService);
exports.CountriesService = CountriesService;


/***/ }),
/* 69 */
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MomentsModule = void 0;
const common_1 = __webpack_require__(5);
const moments_service_1 = __webpack_require__(71);
const typeorm_1 = __webpack_require__(11);
const Moments_1 = __webpack_require__(13);
const Countries_1 = __webpack_require__(18);
const Users_1 = __webpack_require__(21);
const Images_1 = __webpack_require__(20);
const MomentLike_1 = __webpack_require__(22);
const Notices_1 = __webpack_require__(15);
const moments_controller_1 = __webpack_require__(72);
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


/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MomentsService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(12);
const Images_1 = __webpack_require__(20);
const Notices_1 = __webpack_require__(15);
const Moments_1 = __webpack_require__(13);
const Countries_1 = __webpack_require__(18);
const MomentLike_1 = __webpack_require__(22);
const typeorm_2 = __webpack_require__(11);
const viewer = new Object();
const aws_sdk_1 = __importDefault(__webpack_require__(46));
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let MomentsService = class MomentsService {
    constructor(MomentsRepository, CountriesRepository, ImagesRepository, MomentLikeRepository, NoticesRepository) {
        this.MomentsRepository = MomentsRepository;
        this.CountriesRepository = CountriesRepository;
        this.ImagesRepository = ImagesRepository;
        this.MomentLikeRepository = MomentLikeRepository;
        this.NoticesRepository = NoticesRepository;
    }
    async createPost(form, userId, files) {
        if (!form) {
            throw new common_1.NotFoundException('작성 할 데이터가 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const newPostCreate = new Moments_1.Moments();
        newPostCreate.code = form.code;
        newPostCreate.content = form.content;
        newPostCreate.type = form.type;
        newPostCreate.country = { id: country.id };
        newPostCreate.user = { id: userId };
        const newPost = await this.MomentsRepository.save(newPostCreate);
        for (let i = 0; i < files.length; i++) {
            const newImage = new Images_1.Images();
            newImage.image_src = files[i].location;
            newImage.moment = newPost.id;
            await this.ImagesRepository.save(newImage);
        }
        await this.NoticesRepository.save({
            header: `${country.name}/모멘트`,
            code: newPost.code,
            userId: userId,
            momentId: newPost.id,
            content: `${form.content
                .slice(0, 30)
                .replace(/(<([^>]+)>)/gi, '')
                .replace(/&.*;/gi, '')
                .slice(0, 11)}...을 작성했습니다.`,
        });
        return { momentId: newPost.id };
    }
    async saveImage(file) {
        if (!file) {
            throw new common_1.NotFoundException('사용 할 이미지가 없습니다.');
        }
        const newImage = new Images_1.Images();
        newImage.image_src = file.location.replace(/\/original\//, '/thumb/');
        await this.ImagesRepository.save(newImage);
        return true;
    }
    async getOnePost(momentId, code, uuid) {
        const post = await this.MomentsRepository.createQueryBuilder('moments')
            .addSelect([
            'images.image_src',
            'country.name',
            'user.name',
            'user.icon',
            'user.id',
            'likedUser.id',
        ])
            .leftJoin('moments.country', 'country')
            .leftJoin('moments.user', 'user')
            .leftJoin('moments.images', 'images')
            .leftJoin('moments.likedUser', 'likedUser')
            .where('moments.id= :id', { id: momentId })
            .andWhere('moments.code= :code', { code })
            .getOne();
        if (!post) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        if (post && uuid) {
            if (!viewer[momentId]) {
                viewer[momentId] = [];
            }
            if (viewer[momentId].indexOf(uuid) == -1) {
                viewer[momentId].push(uuid);
                await this.MomentsRepository.createQueryBuilder('moments')
                    .update()
                    .set({
                    hit: () => 'hit + 1',
                })
                    .where('id = :id', { id: momentId })
                    .execute();
                setTimeout(() => {
                    viewer[momentId].splice(viewer[momentId].indexOf(uuid), 1);
                }, 600000);
            }
        }
        return post;
    }
    async getLatestPosts() {
        const latestPosts = await this.MomentsRepository.createQueryBuilder('moments')
            .addSelect(['country.name', 'user.name', 'user.icon'])
            .leftJoin('moments.country', 'country')
            .leftJoin('moments.user', 'user')
            .orderBy('moments.id', 'DESC')
            .take(2)
            .getMany();
        if (!latestPosts) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        return latestPosts;
    }
    async getFilterPosts(filter, code, type, page) {
        const filterPosts = await this.MomentsRepository.createQueryBuilder('moments')
            .where(code ? `moments.code = :code` : '1=1', { code })
            .andWhere(type ? `moments.type = :type` : '1=1', { type })
            .addSelect([
            'country.name',
            'user.id',
            'user.icon',
            'user.name',
            'likedUser.id',
            'comments.id',
        ])
            .leftJoin('moments.country', 'country')
            .leftJoin('moments.user', 'user')
            .leftJoin('moments.likedUser', 'likedUser')
            .leftJoin('moments.comments', 'comments')
            .leftJoinAndSelect('moments.images', 'images')
            .getMany();
        switch (filter) {
            case 'popular':
                return filterPosts
                    .sort((a, b) => b.likedUser.length - a.likedUser.length)
                    .slice((page - 1) * 10, page * 10);
            case 'comment':
                return filterPosts
                    .sort((a, b) => b.comments.length - a.comments.length)
                    .slice((page - 1) * 10, page * 10);
            case 'view':
                return filterPosts
                    .sort((a, b) => b.hit - a.hit)
                    .slice((page - 1) * 10, page * 10);
        }
    }
    async getPosts(code, page, type) {
        const posts = await this.MomentsRepository.createQueryBuilder('moments')
            .where(code ? `moments.code = :code` : '1=1', { code })
            .andWhere(type ? `moments.type = :type` : '1=1', { type })
            .addSelect([
            'country.name',
            'user.id',
            'user.icon',
            'user.name',
            'likedUser.id',
            'comments.id',
        ])
            .leftJoin('moments.country', 'country')
            .leftJoin('moments.user', 'user')
            .leftJoin('moments.likedUser', 'likedUser')
            .leftJoin('moments.comments', 'comments')
            .leftJoinAndSelect('moments.images', 'images')
            .orderBy('moments.id', 'DESC')
            .skip((page - 1) * 10)
            .take(10)
            .getMany();
        if (!posts) {
            throw new common_1.NotFoundException('모멘트를 찾을 수 없습니다.');
        }
        return posts;
    }
    async editPost(form, files, userId) {
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const editPost = await this.MomentsRepository.findOne({
            where: { id: form.momentId },
        });
        editPost.content = form.content;
        editPost.type = form.type;
        if (!editPost) {
            throw new common_1.NotFoundException('수정 할 게시물이 없습니다.');
        }
        await this.ImagesRepository.delete({
            moment: editPost.id,
        });
        if (files) {
            for (let i = 0; i < files.length; i++) {
                const newImage = new Images_1.Images();
                newImage.image_src = files[i].location;
                newImage.moment = editPost.id;
                await this.ImagesRepository.save(newImage);
            }
        }
        if (form.prevImage) {
            for (let i = 0; i < form.prevImage.length; i++) {
                const newImage = new Images_1.Images();
                newImage.image_src = form.prevImage[i];
                newImage.moment = editPost.id;
                await this.ImagesRepository.save(newImage);
            }
        }
        await this.MomentsRepository.save(editPost);
        await this.NoticesRepository.save({
            header: `${country.name}/모멘트`,
            code: form.code,
            userId,
            momentId: parseInt(form.momentId),
            content: `${form.momentId}번 모멘트를 수정했습니다.`,
        });
        return { momentId: parseInt(form.momentId) };
    }
    async likePost(momentId, userId) {
        if (!momentId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const newPostLike = new MomentLike_1.MomentLike();
        newPostLike.userId = userId;
        newPostLike.momentId = momentId;
        return await this.MomentLikeRepository.save(newPostLike);
    }
    async dislikePost(momentId, userId) {
        if (!momentId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        return await this.MomentLikeRepository.delete({ momentId, userId });
    }
    async deletePost(momentId) {
        if (!momentId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        return await this.MomentsRepository.delete({
            id: momentId,
        });
    }
};
MomentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(Moments_1.Moments)),
    __param(1, typeorm_2.InjectRepository(Countries_1.Countries)),
    __param(2, typeorm_2.InjectRepository(Images_1.Images)),
    __param(3, typeorm_2.InjectRepository(MomentLike_1.MomentLike)),
    __param(4, typeorm_2.InjectRepository(Notices_1.Notices)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _e : Object])
], MomentsService);
exports.MomentsService = MomentsService;


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MomentsController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(7);
const json_respone_middleware_1 = __webpack_require__(27);
const logged_in_guard_1 = __webpack_require__(38);
const moments_service_1 = __webpack_require__(71);
const platform_express_1 = __webpack_require__(33);
const path_1 = __importDefault(__webpack_require__(35));
const user_decorator_1 = __webpack_require__(40);
const moments_dto_1 = __webpack_require__(73);
const multer_s3_1 = __importDefault(__webpack_require__(45));
const aws_sdk_1 = __importDefault(__webpack_require__(46));
const dotenv_1 = __importDefault(__webpack_require__(47));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let MomentsController = class MomentsController {
    constructor(MomentsService) {
        this.MomentsService = MomentsService;
    }
    async createPost(form, user, files) {
        return await this.MomentsService.createPost(form, user.id, files);
    }
    async editPost(form, files, user) {
        return await this.MomentsService.editPost(form, files, user.id);
    }
    async deletePost(momentId) {
        await this.MomentsService.deletePost(momentId);
    }
    async saveImage(file) {
        await this.MomentsService.saveImage(file);
    }
    async likePost(momentId, user) {
        await this.MomentsService.likePost(momentId, user.id);
    }
    async dislikePost(momentId, user) {
        await this.MomentsService.dislikePost(momentId, user.id);
    }
    async getLatestPosts() {
        const latestPosts = await this.MomentsService.getLatestPosts();
        return latestPosts;
    }
    async getOnePost(code, momentId, uuid) {
        const post = await this.MomentsService.getOnePost(momentId, code, uuid);
        return post;
    }
    async getPosts(code, page, type, filter) {
        if (type) {
            switch (type) {
                case 'community':
                    type = '한인 커뮤니티';
                    break;
                case 'trip':
                    type = '여행정보 공유';
                    break;
                case 'scam alert':
                    type = '사기 경보';
                    break;
                case 'accompany':
                    type = '동행자 모집';
                    break;
                default:
                    break;
            }
        }
        if (filter) {
            return await this.MomentsService.getFilterPosts(filter, code, type, page);
        }
        return await this.MomentsService.getPosts(code, page, type);
    }
};
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create moment post' }),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('image', 5, {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __param(2, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof moments_dto_1.MomentCreateRequestDto !== "undefined" && moments_dto_1.MomentCreateRequestDto) === "function" ? _a : Object, Object, Array]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "createPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Edit post' }),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('image', 5, {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post('edit'),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFiles()),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof moments_dto_1.MomentModifyRequestDto !== "undefined" && moments_dto_1.MomentModifyRequestDto) === "function" ? _b : Object, Array, Object]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "editPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete post' }),
    common_1.Delete('/:momentId'),
    __param(0, common_1.Param('momentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "deletePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'save image for post' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post('image'),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof Express !== "undefined" && (_c = Express.MulterS3) !== void 0 && _c.File) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "saveImage", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'like post' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('like/:momentId'),
    __param(0, common_1.Param('momentId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "likePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'dislike post' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('dislike/:momentId'),
    __param(0, common_1.Param('momentId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "dislikePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get latest posts by using ID -' }),
    common_1.Get('latest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "getLatestPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get one post for post page' }),
    common_1.Get('/:code/:momentId'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Param('momentId', common_1.ParseIntPipe)),
    __param(2, common_1.Query('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "getOnePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get posts' }),
    common_1.Get(),
    __param(0, common_1.Query('code')),
    __param(1, common_1.Query('page', common_1.ParseIntPipe)),
    __param(2, common_1.Query('type')),
    __param(3, common_1.Query('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String]),
    __metadata("design:returntype", Promise)
], MomentsController.prototype, "getPosts", null);
MomentsController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Moments'),
    swagger_1.ApiCookieAuth('connect.sid'),
    common_1.Controller('/api/moment'),
    __metadata("design:paramtypes", [typeof (_e = typeof moments_service_1.MomentsService !== "undefined" && moments_service_1.MomentsService) === "function" ? _e : Object])
], MomentsController);
exports.MomentsController = MomentsController;


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MomentModifyRequestDto = exports.MomentCreateRequestDto = void 0;
const swagger_1 = __webpack_require__(7);
const Moments_1 = __webpack_require__(13);
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


/***/ }),
/* 74 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/serve-static");

/***/ }),
/* 75 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoriesModule = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(11);
const Notices_1 = __webpack_require__(15);
const Countries_1 = __webpack_require__(18);
const Images_1 = __webpack_require__(20);
const Stories_1 = __webpack_require__(17);
const StoryLike_1 = __webpack_require__(24);
const Users_1 = __webpack_require__(21);
const stories_controller_1 = __webpack_require__(76);
const stories_service_1 = __webpack_require__(77);
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


/***/ }),
/* 76 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoriesController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(7);
const json_respone_middleware_1 = __webpack_require__(27);
const logged_in_guard_1 = __webpack_require__(38);
const stories_service_1 = __webpack_require__(77);
const platform_express_1 = __webpack_require__(33);
const path_1 = __importDefault(__webpack_require__(35));
const user_decorator_1 = __webpack_require__(40);
const stories_dto_1 = __webpack_require__(78);
const multer_s3_1 = __importDefault(__webpack_require__(45));
const aws_sdk_1 = __importDefault(__webpack_require__(46));
const dotenv_1 = __importDefault(__webpack_require__(47));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let StoriesController = class StoriesController {
    constructor(StoriesService) {
        this.StoriesService = StoriesService;
    }
    async createPost(form, user, file) {
        return await this.StoriesService.createPost(form, user.id, file);
    }
    async editPost(form, file, user) {
        return await this.StoriesService.editPost(form, file, user === null || user === void 0 ? void 0 : user.id);
    }
    async deletePost(storyId) {
        await this.StoriesService.deletePost(storyId);
    }
    async saveImage(file) {
        const image = await this.StoriesService.saveImage(file);
        return image;
    }
    async likePost(storyId, user) {
        await this.StoriesService.likePost(storyId, user.id);
    }
    async dislikePost(storyId, user) {
        await this.StoriesService.dislikePost(storyId, user.id);
    }
    async getPosts(code, page, filter) {
        if (filter) {
            return await this.StoriesService.getFilterPosts(filter, code, page);
        }
        return await this.StoriesService.getPosts(code, page);
    }
    async getLatestPosts() {
        const latestPosts = await this.StoriesService.getLatestPosts();
        return latestPosts;
    }
    async getPopularPosts(code) {
        const popularPosts = await this.StoriesService.getPopularPosts(code);
        return popularPosts;
    }
    async getSidePosts(storyId, userId) {
        const sidePosts = await this.StoriesService.getSidePosts(storyId, userId);
        return sidePosts;
    }
    async getOnePost(code, storyId, uuid) {
        const post = await this.StoriesService.getOnePost(storyId, code, uuid);
        return post;
    }
};
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create story post' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof stories_dto_1.StoryCreateDto !== "undefined" && stories_dto_1.StoryCreateDto) === "function" ? _a : Object, Object, typeof (_c = typeof Express !== "undefined" && (_b = Express.MulterS3) !== void 0 && _b.File) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "createPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Edit post' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post('edit'),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFile()),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof stories_dto_1.StoryEditDto !== "undefined" && stories_dto_1.StoryEditDto) === "function" ? _d : Object, typeof (_f = typeof Express !== "undefined" && (_e = Express.MulterS3) !== void 0 && _e.File) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "editPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete post' }),
    common_1.Delete('/:storyId'),
    __param(0, common_1.Param('storyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "deletePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get preview posts for story page' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post('image'),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof Express !== "undefined" && (_g = Express.MulterS3) !== void 0 && _g.File) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "saveImage", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'like post' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('like/:storyId'),
    __param(0, common_1.Param('storyId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "likePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'dislike post' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('dislike/:storyId'),
    __param(0, common_1.Param('storyId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "dislikePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get posts' }),
    common_1.Get(),
    __param(0, common_1.Query('code')),
    __param(1, common_1.Query('page', common_1.ParseIntPipe)),
    __param(2, common_1.Query('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get latest posts by using ID' }),
    common_1.Get('latest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getLatestPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get popular 9 posts' }),
    common_1.Get('popular'),
    __param(0, common_1.Query('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getPopularPosts", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Get side posts each one for pagination on the post page',
    }),
    common_1.Get('side/:storyId/:userId'),
    __param(0, common_1.Param('storyId', common_1.ParseIntPipe)),
    __param(1, common_1.Param('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getSidePosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get one post for post page' }),
    common_1.Get(':code/:storyId'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Param('storyId', common_1.ParseIntPipe)),
    __param(2, common_1.Query('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getOnePost", null);
StoriesController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Story'),
    swagger_1.ApiCookieAuth('connect.sid'),
    common_1.Controller('/api/story'),
    __metadata("design:paramtypes", [typeof (_j = typeof stories_service_1.StoriesService !== "undefined" && stories_service_1.StoriesService) === "function" ? _j : Object])
], StoriesController);
exports.StoriesController = StoriesController;


/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoriesService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(11);
const Images_1 = __webpack_require__(20);
const Stories_1 = __webpack_require__(17);
const typeorm_2 = __webpack_require__(12);
const Notices_1 = __webpack_require__(15);
const Countries_1 = __webpack_require__(18);
const StoryLike_1 = __webpack_require__(24);
const viewObj = new Object();
let StoriesService = class StoriesService {
    constructor(StoriesRepository, CountriesRepository, ImagesRepository, StoryLikeRepository, NoticesRepository) {
        this.StoriesRepository = StoriesRepository;
        this.CountriesRepository = CountriesRepository;
        this.ImagesRepository = ImagesRepository;
        this.StoryLikeRepository = StoryLikeRepository;
        this.NoticesRepository = NoticesRepository;
    }
    async createPost(form, userId, file) {
        if (!form) {
            throw new common_1.NotFoundException('작성 할 데이터가 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const newPostCreate = new Stories_1.Stories();
        newPostCreate.code = form.code;
        newPostCreate.title = form.title;
        newPostCreate.content = form.content;
        newPostCreate.region = form.region;
        newPostCreate.lat = form.lat;
        newPostCreate.lng = form.lng;
        newPostCreate.country = { id: country.id };
        newPostCreate.user = { id: userId };
        if (file) {
            newPostCreate.thumbnail = file.location.replace(/\/original\//, '/thumb/');
        }
        const newPost = await this.StoriesRepository.save(newPostCreate);
        await this.NoticesRepository.save({
            header: `${country.name}/연대기`,
            code: newPost.code,
            userId: userId,
            storyId: newPost.id,
            content: `${form.title.slice(0, 10)}...을 작성했습니다.`,
        });
        return { storyId: newPost.id };
    }
    async saveImage(file) {
        if (!file) {
            throw new common_1.NotFoundException('사용 할 이미지가 없습니다.');
        }
        const newImage = new Images_1.Images();
        newImage.image_src = file.location.replace(/\/original\//, '/thumb/');
        await this.ImagesRepository.save(newImage);
        return newImage.image_src;
    }
    async getSidePosts(storyId, userId) {
        const prevPost = await this.StoriesRepository.findOne({
            select: ['thumbnail', 'title', 'code', 'id'],
            where: { user: userId, id: typeorm_2.LessThan(storyId) },
        }).then((res) => {
            if (!res) {
                return this.StoriesRepository.findOne({
                    select: ['thumbnail', 'title', 'code', 'id'],
                    where: { id: typeorm_2.LessThan(storyId) },
                });
            }
            else {
                return res;
            }
        });
        const nextPost = await this.StoriesRepository.findOne({
            select: ['thumbnail', 'title', 'code', 'id'],
            where: { user: userId, id: typeorm_2.MoreThan(storyId) },
        }).then((res) => {
            if (!res) {
                return this.StoriesRepository.findOne({
                    select: ['thumbnail', 'title', 'code', 'id'],
                    where: { id: typeorm_2.MoreThan(storyId) },
                });
            }
            else {
                return res;
            }
        });
        return { prevPost, nextPost };
    }
    async getOnePost(storyId, code, uuid) {
        const post = await this.StoriesRepository.findOne({
            where: {
                id: storyId,
                code,
            },
            relations: [
                'user',
                'country',
                'likedUser',
                'images',
                'comments',
                'comments.user',
                'comments.likedUser',
                'comments.subComments',
                'comments.subComments.user',
            ],
        });
        if (!post) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        if (post && uuid) {
            if (!viewObj[storyId]) {
                viewObj[storyId] = [];
            }
            if (viewObj[storyId].indexOf(uuid) == -1) {
                viewObj[storyId].push(uuid);
                await this.StoriesRepository.createQueryBuilder('stories')
                    .update()
                    .set({
                    hit: () => 'hit + 1',
                })
                    .where('id = :id', { id: storyId })
                    .execute();
                setTimeout(() => {
                    viewObj[storyId].splice(viewObj[storyId].indexOf(uuid), 1);
                }, 600000);
            }
        }
        return post;
    }
    async getLatestPosts() {
        const latestPosts = await this.StoriesRepository.find({
            relations: ['country', 'user'],
            order: { id: 'DESC' },
            take: 3,
        });
        if (!latestPosts) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        return latestPosts;
    }
    async getFilterPosts(filter, code, page) {
        const filterPosts = await this.StoriesRepository.createQueryBuilder('stories')
            .where(code ? `stories.code = :code` : '1=1', { code })
            .leftJoinAndSelect('stories.country', 'country')
            .leftJoinAndSelect('stories.user', 'user')
            .leftJoinAndSelect('stories.likedUser', 'likedUser')
            .leftJoinAndSelect('stories.comments', 'comments')
            .leftJoinAndSelect('stories.images', 'images')
            .getMany();
        switch (filter) {
            case 'popular':
                return filterPosts
                    .sort((a, b) => b.likedUser.length - a.likedUser.length)
                    .slice((page - 1) * 10, page * 10);
            case 'comment':
                return filterPosts
                    .sort((a, b) => b.comments.length - a.comments.length)
                    .slice((page - 1) * 10, page * 10);
            case 'view':
                return filterPosts
                    .sort((a, b) => b.hit - a.hit)
                    .slice((page - 1) * 10, page * 10);
        }
    }
    async getPopularPosts(code) {
        const pointWithpostId = await this.StoriesRepository.createQueryBuilder('stories')
            .select([
            'stories.id',
            'stories.hit',
            'likedUser.id as user_len',
            'comments.id as comment_len',
        ])
            .leftJoinAndSelect('stories.likedUser', 'likedUser')
            .leftJoinAndSelect('stories.comments', 'comments')
            .where(code ? `stories.code = :code` : '1=1', { code })
            .orderBy('stories.id', 'DESC')
            .take(50)
            .getMany()
            .then((res) => {
            return res
                .map((v) => {
                return {
                    id: v.id,
                    point: v.hit * 0.001 + v.comments.length + v.likedUser.length * 5,
                };
            })
                .sort((a, b) => b.point - a.point)
                .splice(0, 4);
        });
        let popularPosts = [];
        for (const i of pointWithpostId) {
            await this.StoriesRepository.findOne({
                where: { id: i.id },
                relations: ['user', 'country', 'likedUser', 'comments'],
            }).then((res) => {
                popularPosts.push(res);
            });
        }
        return popularPosts;
    }
    async getPosts(code, page) {
        const posts = await this.StoriesRepository.createQueryBuilder('stories')
            .leftJoinAndSelect('stories.country', 'country')
            .leftJoinAndSelect('stories.user', 'user')
            .leftJoinAndSelect('stories.likedUser', 'likedUser')
            .leftJoinAndSelect('stories.comments', 'comments')
            .leftJoinAndSelect('stories.images', 'images')
            .where(code ? `stories.code = :code` : '1=1', { code })
            .orderBy('stories.id', 'DESC')
            .skip((page - 1) * 10)
            .take(10)
            .getMany();
        return posts;
    }
    async editPost(form, file, userId) {
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const editPost = await this.StoriesRepository.findOne({
            where: { id: form.storyId },
        });
        if (!editPost || !country) {
            throw new common_1.NotFoundException('수정 할 게시물이 없습니다.');
        }
        editPost.code = form.code;
        editPost.title = form.title;
        editPost.content = form.content;
        editPost.region = form.region;
        editPost.lat = form.lat;
        editPost.lng = form.lng;
        editPost.country = { id: country.id };
        if (file) {
            editPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
        }
        await this.StoriesRepository.save(editPost);
        await this.NoticesRepository.save({
            header: `${country.name}/연대기`,
            code: editPost.code,
            userId,
            storyId: editPost.id,
            content: `${form.title.slice(0, 10)}...을 수정했습니다.`,
        });
        return { storyId: parseInt(form.storyId) };
    }
    async likePost(storyId, userId) {
        if (!storyId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const newPostLike = new StoryLike_1.StoryLike();
        newPostLike.userId = userId;
        newPostLike.storyId = storyId;
        return await this.StoryLikeRepository.save(newPostLike);
    }
    async dislikePost(storyId, userId) {
        if (!storyId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        return await this.StoryLikeRepository.delete({ storyId, userId });
    }
    async deletePost(storyId) {
        if (!storyId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        return await this.StoriesRepository.delete({
            id: storyId,
        });
    }
};
StoriesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Stories_1.Stories)),
    __param(1, typeorm_1.InjectRepository(Countries_1.Countries)),
    __param(2, typeorm_1.InjectRepository(Images_1.Images)),
    __param(3, typeorm_1.InjectRepository(StoryLike_1.StoryLike)),
    __param(4, typeorm_1.InjectRepository(Notices_1.Notices)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object])
], StoriesService);
exports.StoriesService = StoriesService;


/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoryEditDto = exports.StoryCreateDto = void 0;
const swagger_1 = __webpack_require__(7);
const Stories_1 = __webpack_require__(17);
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


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsModule = void 0;
const common_1 = __webpack_require__(5);
const Moments_1 = __webpack_require__(13);
const Comments_1 = __webpack_require__(16);
const Countries_1 = __webpack_require__(18);
const SubComments_1 = __webpack_require__(23);
const Users_1 = __webpack_require__(21);
const comments_controller_1 = __webpack_require__(80);
const comments_service_1 = __webpack_require__(82);
const typeorm_1 = __webpack_require__(11);
const CommentLike_1 = __webpack_require__(26);
const Notices_1 = __webpack_require__(15);
const Stories_1 = __webpack_require__(17);
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Moments_1.Moments,
                Countries_1.Countries,
                Users_1.Users,
                Comments_1.Comments,
                SubComments_1.SubComments,
                CommentLike_1.CommentLike,
                Notices_1.Notices,
                Stories_1.Stories,
            ]),
        ],
        providers: [comments_service_1.CommentsService],
        controllers: [comments_controller_1.CommentsController],
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(7);
const logged_in_guard_1 = __webpack_require__(38);
const user_decorator_1 = __webpack_require__(40);
const comments_dto_1 = __webpack_require__(81);
const json_respone_middleware_1 = __webpack_require__(27);
const comments_service_1 = __webpack_require__(82);
let CommentsController = class CommentsController {
    constructor(CommentService) {
        this.CommentService = CommentService;
    }
    async getComments(postId, postType) {
        return await this.CommentService.getComments(postId, postType);
    }
    async createComment(form, user) {
        return await this.CommentService.createComment(form, user.id);
    }
    async deleteComment(commentId) {
        await this.CommentService.deleteComment(commentId);
    }
    async createSubComment(form, user) {
        const createdSubComment = await this.CommentService.createSubComment(form.content, user.id, form.commentId);
        return createdSubComment;
    }
    async deleteSubComment(subCommentId) {
        await this.CommentService.deleteSubComment(subCommentId);
    }
    async likeComment(commentId, user) {
        await this.CommentService.likeComment(commentId, user.id);
    }
    async dislikeComment(commentId, user) {
        await this.CommentService.dislikeComment(commentId, user.id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'get Comment by post id' }),
    common_1.Get('/:postId'),
    __param(0, common_1.Param('postId', common_1.ParseIntPipe)),
    __param(1, common_1.Query('postType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getComments", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create Comment' }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof comments_dto_1.CommentCreateDto !== "undefined" && comments_dto_1.CommentCreateDto) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createComment", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete Comment' }),
    common_1.Delete(':commentId'),
    __param(0, common_1.Param('commentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteComment", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create SubComment' }),
    common_1.Post('/subComment'),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof comments_dto_1.CommentCreateDto !== "undefined" && comments_dto_1.CommentCreateDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createSubComment", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete SubComment' }),
    common_1.Delete('/subComment/:subCommentId'),
    __param(0, common_1.Param('subCommentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteSubComment", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'like Comment' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('like/:commentId'),
    __param(0, common_1.Param('commentId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "likeComment", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'dislike Comment' }),
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    common_1.Patch('dislike/:commentId'),
    __param(0, common_1.Param('commentId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "dislikeComment", null);
CommentsController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Comment'),
    swagger_1.ApiCookieAuth('connect.sid'),
    common_1.Controller('/api/comment'),
    __metadata("design:paramtypes", [typeof (_c = typeof comments_service_1.CommentsService !== "undefined" && comments_service_1.CommentsService) === "function" ? _c : Object])
], CommentsController);
exports.CommentsController = CommentsController;


/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentCreateDto = void 0;
class CommentCreateDto {
}
exports.CommentCreateDto = CommentCreateDto;


/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsService = void 0;
const common_1 = __webpack_require__(5);
const Comments_1 = __webpack_require__(16);
const typeorm_1 = __webpack_require__(12);
const SubComments_1 = __webpack_require__(23);
const typeorm_2 = __webpack_require__(11);
const CommentLike_1 = __webpack_require__(26);
const Notices_1 = __webpack_require__(15);
const Moments_1 = __webpack_require__(13);
const Stories_1 = __webpack_require__(17);
let CommentsService = class CommentsService {
    constructor(CommentsRepository, subCommentsRepository, CommentLikeRepository, NoticesRepository, MomentsRepository, StoriesRepository) {
        this.CommentsRepository = CommentsRepository;
        this.subCommentsRepository = subCommentsRepository;
        this.CommentLikeRepository = CommentLikeRepository;
        this.NoticesRepository = NoticesRepository;
        this.MomentsRepository = MomentsRepository;
        this.StoriesRepository = StoriesRepository;
    }
    async createComment(form, userId) {
        const newComment = new Comments_1.Comments();
        newComment.content = form.content;
        newComment.user = { id: userId };
        if (form.momentId) {
            newComment.moment = { id: form.momentId };
            const moment = await this.MomentsRepository.findOne({
                relations: ['country', 'user'],
                where: { id: form.momentId },
            });
            await this.NoticesRepository.save({
                header: `${moment.country.name}/${moment.id}번모멘트/댓글`,
                code: moment.code,
                userId: userId,
                momentId: moment.id,
                content: `${form.content.slice(0, 10)}...을 작성했습니다.`,
            });
            if (moment.user.id !== userId) {
                await this.NoticesRepository.save({
                    header: `${moment.country.name}/${moment.id}번모멘트/댓글`,
                    code: moment.code,
                    userId: moment.user.id,
                    momentId: moment.id,
                    content: `${moment.content
                        .slice(0, 30)
                        .replace(/(<([^>]+)>)/gi, '')
                        .replace(/&.*;/gi, '')
                        .slice(0, 10)}... 에 댓글이 달렸습니다.`,
                });
            }
        }
        else {
            newComment.story = { id: form.storyId };
            const story = await this.StoriesRepository.findOne({
                relations: ['country', 'user'],
                where: { id: form.storyId },
            });
            await this.NoticesRepository.save({
                header: `${story.country.name}/${story.id}번연대기/댓글`,
                code: story.code,
                userId,
                storyId: story.id,
                content: `${form.content.slice(0, 10)}...을 작성했습니다.`,
            });
            if (story.user.id !== userId) {
                await this.NoticesRepository.save({
                    header: `${story.country.name}/${story.id}번연대기/댓글`,
                    code: story.code,
                    userId: story.user.id,
                    storyId: story.id,
                    content: `${story.title.slice(0, 10)}... 에 댓글이 달렸습니다.`,
                });
            }
        }
        await this.CommentsRepository.save(newComment);
        return true;
    }
    async getComments(postId, postType) {
        const comments = this.CommentsRepository.createQueryBuilder('comments')
            .addSelect([
            'likedUser.id',
            'user.id',
            'user.icon',
            'user.name',
            'subComments_user.id',
            'subComments_user.icon',
            'subComments_user.name',
        ])
            .leftJoin('comments.likedUser', 'likedUser')
            .leftJoin('comments.user', 'user')
            .leftJoinAndSelect('comments.subComments', 'subComments')
            .leftJoin('subComments.user', 'subComments_user');
        if (postType === 'moment') {
            return await comments
                .where('comments.moment= :moment', { moment: postId })
                .orderBy({
                'comments.id': 'ASC',
                'subComments_user.id': 'ASC',
            })
                .getMany();
        }
        else if (postType === 'story') {
            return await comments
                .where('comments.story= :story', { story: postId })
                .orderBy({
                'comments.id': 'ASC',
                'subComments_user.id': 'ASC',
            })
                .getMany();
        }
    }
    async deleteComment(commentId) {
        await this.CommentsRepository.delete({ id: commentId });
        return true;
    }
    async createSubComment(content, userId, commentId) {
        const newSubComment = new SubComments_1.SubComments();
        newSubComment.content = content;
        newSubComment.user = { id: userId };
        newSubComment.comment = { id: commentId };
        await this.subCommentsRepository.save(newSubComment);
        return;
    }
    async deleteSubComment(subCommentId) {
        await this.subCommentsRepository.delete({ id: subCommentId });
        return true;
    }
    async likeComment(commentId, userId) {
        if (!commentId) {
            throw new common_1.NotFoundException('댓글을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        const newCommentLike = new CommentLike_1.CommentLike();
        newCommentLike.userId = userId;
        newCommentLike.commentId = commentId;
        return await this.CommentLikeRepository.save(newCommentLike);
    }
    async dislikeComment(commentId, userId) {
        if (!commentId) {
            throw new common_1.NotFoundException('댓글을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('유저를 찾지 못했습니다.');
        }
        return await this.CommentLikeRepository.delete({ commentId, userId });
    }
};
CommentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(Comments_1.Comments)),
    __param(1, typeorm_2.InjectRepository(SubComments_1.SubComments)),
    __param(2, typeorm_2.InjectRepository(CommentLike_1.CommentLike)),
    __param(3, typeorm_2.InjectRepository(Notices_1.Notices)),
    __param(4, typeorm_2.InjectRepository(Moments_1.Moments)),
    __param(5, typeorm_2.InjectRepository(Stories_1.Stories)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _e : Object, typeof (_f = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _f : Object])
], CommentsService);
exports.CommentsService = CommentsService;


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArticlesModule = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(11);
const Articles_1 = __webpack_require__(19);
const Countries_1 = __webpack_require__(18);
const Images_1 = __webpack_require__(20);
const Users_1 = __webpack_require__(21);
const articles_controller_1 = __webpack_require__(84);
const articles_service_1 = __webpack_require__(85);
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


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArticlesController = void 0;
const common_1 = __webpack_require__(5);
const swagger_1 = __webpack_require__(7);
const json_respone_middleware_1 = __webpack_require__(27);
const logged_in_guard_1 = __webpack_require__(38);
const articles_service_1 = __webpack_require__(85);
const platform_express_1 = __webpack_require__(33);
const path_1 = __importDefault(__webpack_require__(35));
const user_decorator_1 = __webpack_require__(40);
const articles_dto_1 = __webpack_require__(86);
const multer_s3_1 = __importDefault(__webpack_require__(45));
const aws_sdk_1 = __importDefault(__webpack_require__(46));
const dotenv_1 = __importDefault(__webpack_require__(47));
dotenv_1.default.config();
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
});
let ArticlesController = class ArticlesController {
    constructor(ArticlesService) {
        this.ArticlesService = ArticlesService;
    }
    async createPost(form, user, file) {
        return await this.ArticlesService.createPost(form, user.id, file);
    }
    async editPost(form, file, user) {
        return await this.ArticlesService.editPost(form, file, user.id);
    }
    async deletePost(articleId, user) {
        await this.ArticlesService.deletePost(articleId, user.id);
    }
    async saveImage(file) {
        const image = await this.ArticlesService.saveImage(file);
        return image;
    }
    async getPosts(page, type) {
        return await this.ArticlesService.getPosts(type, page);
    }
    async getPopularPosts(code) {
        const popularPosts = await this.ArticlesService.getPopularPosts(code);
        return popularPosts;
    }
    async getOnePost(articleId) {
        const post = await this.ArticlesService.getOnePost(articleId);
        return post;
    }
};
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Create article post' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.User()),
    __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof articles_dto_1.ArticleCreateDto !== "undefined" && articles_dto_1.ArticleCreateDto) === "function" ? _a : Object, Object, typeof (_c = typeof Express !== "undefined" && (_b = Express.MulterS3) !== void 0 && _b.File) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "createPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Edit post' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post('edit'),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFile()),
    __param(2, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof articles_dto_1.ArticleEditDto !== "undefined" && articles_dto_1.ArticleEditDto) === "function" ? _d : Object, typeof (_f = typeof Express !== "undefined" && (_e = Express.MulterS3) !== void 0 && _e.File) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "editPost", null);
__decorate([
    common_1.UseGuards(new logged_in_guard_1.LoggedInGuard()),
    swagger_1.ApiOperation({ summary: 'Delete post' }),
    common_1.Delete('/:articleId'),
    __param(0, common_1.Param('articleId', common_1.ParseIntPipe)),
    __param(1, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "deletePost", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'save image for article' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_s3_1.default({
            s3: new aws_sdk_1.default.S3(),
            bucket: process.env.S3_BUCKET_NAME,
            key(req, file, cb) {
                cb(null, `original/${Date.now()}_${path_1.default.basename(file.originalname)}`);
            },
        }),
        limits: { fileSize: 20 * 1024 * 1024 },
    })),
    common_1.Post('image'),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof Express !== "undefined" && (_g = Express.MulterS3) !== void 0 && _g.File) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "saveImage", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get posts' }),
    common_1.Get(),
    __param(0, common_1.Query('page', common_1.ParseIntPipe)),
    __param(1, common_1.Query('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get latest posts by using ID' }),
    common_1.Get('popular'),
    __param(0, common_1.Query('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getPopularPosts", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get one post for post page' }),
    common_1.Get(':articleId'),
    __param(0, common_1.Param('articleId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getOnePost", null);
ArticlesController = __decorate([
    common_1.UseInterceptors(json_respone_middleware_1.JsonResponeGenerator),
    swagger_1.ApiTags('Articles'),
    swagger_1.ApiCookieAuth('connect.sid'),
    common_1.Controller('/api/article'),
    __metadata("design:paramtypes", [typeof (_j = typeof articles_service_1.ArticlesService !== "undefined" && articles_service_1.ArticlesService) === "function" ? _j : Object])
], ArticlesController);
exports.ArticlesController = ArticlesController;


/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArticlesService = void 0;
const common_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(11);
const Images_1 = __webpack_require__(20);
const typeorm_2 = __webpack_require__(12);
const Countries_1 = __webpack_require__(18);
const Articles_1 = __webpack_require__(19);
const Users_1 = __webpack_require__(21);
let ArticlesService = class ArticlesService {
    constructor(ArticlesRepository, CountriesRepository, ImagesRepository, UsersRepository) {
        this.ArticlesRepository = ArticlesRepository;
        this.CountriesRepository = CountriesRepository;
        this.ImagesRepository = ImagesRepository;
        this.UsersRepository = UsersRepository;
    }
    async createPost(form, userId, file) {
        if (!form) {
            throw new common_1.NotFoundException('작성 할 데이터가 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const user = await this.UsersRepository.findOne({
            select: ['id', 'admin'],
            where: { id: userId },
        });
        if (!user.admin) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const newPost = new Articles_1.Articles();
        newPost.type = form.type;
        newPost.title = form.title;
        newPost.content = form.content;
        newPost.region = form.region;
        newPost.lat = form.lat;
        newPost.lng = form.lng;
        newPost.country = { id: country.id };
        newPost.user = { id: user.id };
        if (form.ranking) {
            newPost.ranking = parseInt(form.ranking);
        }
        if (form.label) {
            newPost.label = form.label;
        }
        if (file) {
            newPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
        }
        await this.ArticlesRepository.save(newPost);
        return { articleId: newPost.id };
    }
    async saveImage(file) {
        if (!file) {
            throw new common_1.NotFoundException('사용 할 이미지가 없습니다.');
        }
        const newImage = new Images_1.Images();
        newImage.image_src = file.location.replace(/\/original\//, '/thumb/');
        await this.ImagesRepository.save(newImage);
        return newImage.image_src;
    }
    async getOnePost(articleId) {
        const post = await this.ArticlesRepository.findOne({
            where: {
                id: articleId,
            },
            relations: ['country', 'images', 'user'],
        });
        if (!post) {
            throw new common_1.NotFoundException('가져올 게시물이 없습니다.');
        }
        return post;
    }
    async getPopularPosts(code) {
        if (code) {
            const country = await this.CountriesRepository.findOne({
                where: { code },
            });
            const rankingPostsByCountry = await this.ArticlesRepository.createQueryBuilder('articles')
                .leftJoinAndSelect('articles.country', 'country')
                .orderBy('articles.ranking', 'DESC')
                .where(`articles.country = :country`, { country: country.id })
                .take(4)
                .getMany();
            return rankingPostsByCountry;
        }
        else {
            const rankingPosts = await this.ArticlesRepository.createQueryBuilder('articles')
                .leftJoinAndSelect('articles.country', 'country')
                .orderBy('articles.ranking', 'DESC')
                .take(6)
                .getMany();
            return rankingPosts;
        }
    }
    async getPosts(type, page) {
        const posts = await this.ArticlesRepository.createQueryBuilder('articles')
            .leftJoinAndSelect('articles.country', 'country')
            .where(type ? `articles.type = :type` : '1=1', { type })
            .orderBy('articles.id', 'DESC')
            .skip((page - 1) * 10)
            .take(10)
            .getMany();
        return posts;
    }
    async editPost(form, file, userId) {
        if (!userId) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const user = await this.UsersRepository.findOne({
            select: ['id', 'admin'],
            where: { id: userId },
        });
        if (!user.admin) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const country = await this.CountriesRepository.findOne({
            where: { code: form.code },
        });
        const editPost = await this.ArticlesRepository.findOne({
            where: { id: form.articleId },
        });
        if (!editPost || !country) {
            throw new common_1.NotFoundException('수정 할 게시물이 없습니다.');
        }
        editPost.type = form.type;
        editPost.title = form.title;
        editPost.content = form.content;
        editPost.region = form.region;
        if (form.ranking) {
            editPost.ranking = parseInt(form.ranking);
        }
        if (form.label) {
            editPost.label = form.label;
        }
        editPost.lat = form.lat;
        editPost.lng = form.lng;
        editPost.country = { id: country.id };
        if (file) {
            editPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
        }
        await this.ArticlesRepository.save(editPost);
        return { articleId: parseInt(form.articleId) };
    }
    async deletePost(articleId, userId) {
        if (!articleId) {
            throw new common_1.NotFoundException('게시물을 찾을 수 없습니다.');
        }
        if (!userId) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        const user = await this.UsersRepository.findOne({
            select: ['id', 'admin'],
            where: { id: userId },
        });
        if (!user.admin) {
            throw new common_1.UnauthorizedException('운영자만 작성 할 수 있습니다.');
        }
        return await this.ArticlesRepository.delete({
            id: articleId,
        });
    }
};
ArticlesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Articles_1.Articles)),
    __param(1, typeorm_1.InjectRepository(Countries_1.Countries)),
    __param(2, typeorm_1.InjectRepository(Images_1.Images)),
    __param(3, typeorm_1.InjectRepository(Users_1.Users)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object])
], ArticlesService);
exports.ArticlesService = ArticlesService;


/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArticleEditDto = exports.ArticleCreateDto = void 0;
const swagger_1 = __webpack_require__(7);
const Articles_1 = __webpack_require__(19);
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


/***/ }),
/* 87 */
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),
/* 88 */
/***/ ((module) => {

"use strict";
module.exports = require("passport");

/***/ }),
/* 89 */
/***/ ((module) => {

"use strict";
module.exports = require("express-session");

/***/ }),
/* 90 */
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),
/* 91 */
/***/ ((module) => {

"use strict";
module.exports = require("csurf");

/***/ }),
/* 92 */
/***/ ((module) => {

"use strict";
module.exports = require("hpp");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("fde5cad8995ca160e2d6")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			0: 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			}).catch(function(err) { if(err.code !== "MODULE_NOT_FOUND") throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(0);
/******/ 	var __webpack_exports__ = __webpack_require__(3);
/******/ 	
/******/ })()
;