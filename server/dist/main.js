"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_filter_1 = require("./http-exception.filter");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const common_1 = require("@nestjs/common");
const helmet_1 = __importDefault(require("helmet"));
const csurf_1 = __importDefault(require("csurf"));
const hpp_1 = __importDefault(require("hpp"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (module.hot) {
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
//# sourceMappingURL=main.js.map