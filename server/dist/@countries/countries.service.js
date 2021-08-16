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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const axios_1 = __importDefault(require("axios"));
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Countries_1 = require("../entities/Countries");
const typeorm_2 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
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
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CountriesService);
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map