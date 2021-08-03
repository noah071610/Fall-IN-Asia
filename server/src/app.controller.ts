import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LoggedInGuard } from './auth/logged-in.guard';
import { User } from './decorators/user.decorator';
import { JsonResponeGenerator } from './intersepter/json.respone.middleware';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Travelover')
@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  welcomeTravelover(): string {
    return this.appService.welcomeTravelover();
  }

  @Get('/search/:searchWord')
  async getSearchPosts(@Param('searchWord') searchWord: string) {
    return await this.appService.getSearchPosts(decodeURIComponent(searchWord));
  }
}
