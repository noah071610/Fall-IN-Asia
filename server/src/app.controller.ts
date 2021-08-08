import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JsonResponeGenerator } from './intersepter/json.respone.middleware';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Travelover')
@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search/:searchWord')
  async getSearchPosts(@Param('searchWord') searchWord: string) {
    return await this.appService.getSearchPosts(decodeURIComponent(searchWord));
  }
}
