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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const countries_service_1 = require("./countries.service");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const json_respone_middleware_1 = require("../intersepter/json.respone.middleware");
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
    __metadata("design:paramtypes", [countries_service_1.CountriesService])
], CountriesController);
exports.CountriesController = CountriesController;
//# sourceMappingURL=countries.controller.js.map