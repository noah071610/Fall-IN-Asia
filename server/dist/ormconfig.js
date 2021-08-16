"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
const Users_1 = require("./entities/Users");
const Stories_1 = require("./entities/Stories");
const Comments_1 = require("./entities/Comments");
const SubComments_1 = require("./entities/SubComments");
const Images_1 = require("./entities/Images");
const Notices_1 = require("./entities/Notices");
const Moments_1 = require("./entities/Moments");
const MomentLike_1 = require("./entities/MomentLike");
const Countries_1 = require("./entities/Countries");
const StoryLike_1 = require("./entities/StoryLike");
const Follow_1 = require("./entities/Follow");
const Articles_1 = require("./entities/Articles");
const CommentLike_1 = require("./entities/CommentLike");
const AuthNum_1 = require("./entities/AuthNum");
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
//# sourceMappingURL=ormconfig.js.map