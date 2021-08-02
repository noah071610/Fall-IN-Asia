import { CountriesService } from './countries.service';
import { Get, Param, UseInterceptors } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
@UseInterceptors(JsonResponeGenerator)
@ApiTags('Countries')
@Controller('/api/country')
export class CountriesController {
  constructor(private readonly CountriesService: CountriesService) {}
  @ApiOperation({ summary: 'get Countries' })
  @Get()
  async getCountries() {
    const countries = await this.CountriesService.getCountries();
    return countries;
  }

  @ApiOperation({ summary: 'get Countries order by popular' })
  @Get('popular')
  async getPopularCountries() {
    const popularCountries = await this.CountriesService.getPopularCountries();
    return popularCountries;
  }

  @ApiOperation({ summary: 'get information about country ' })
  @Get('info/:code/:type')
  async getCountryInfo(
    @Param('code') code: string,
    @Param('type') type: string,
  ) {
    const countryInfo = await this.CountriesService.getCountryInfo(code, type);
    return countryInfo;
  }

  @ApiOperation({ summary: 'get one country' })
  @Get('/:code')
  async getCountry(@Param('code') code: string) {
    const country = await this.CountriesService.getCountry(code);
    return country;
  }
}
