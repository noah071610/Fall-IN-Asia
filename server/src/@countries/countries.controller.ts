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
    return await this.CountriesService.getCountries();
  }

  @ApiOperation({ summary: 'get Countries order by popular' })
  @Get('popular')
  async getPopularCountries() {
    return await this.CountriesService.getPopularCountries();
  }

  @ApiOperation({ summary: 'get information about country ' })
  @Get('info/:code/:type')
  async getCountryInfo(
    @Param('code') code: string,
    @Param('type') type: string,
  ) {
    return await this.CountriesService.getCountryInfo(code, type);
  }

  @ApiOperation({ summary: 'get one country' })
  @Get('/:code')
  async getCountry(@Param('code') code: string) {
    return await this.CountriesService.getCountry(code);
  }
}
