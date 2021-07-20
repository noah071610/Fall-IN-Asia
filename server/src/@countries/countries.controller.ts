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

  @ApiOperation({ summary: 'get one country' })
  @Get('/:code')
  async getCountry(@Param('code') code: string) {
    const country = await this.CountriesService.getCountry(code);
    return country;
  }
}

// @UseGuards(new LoggedInGuard())
// @ApiOperation({ summary: 'get Countries with score' })
// @Delete('vote/:style/:groupId')
// async undoScore(
//   @Param('style') style,
//   @Param('groupId') groupId,
//   @User() user,
// ) {
//   const undoScore = await this.CountriesService.undoScore(
//     style,
//     groupId,
//     user.id,
//   );
//   return undoScore;
// }
