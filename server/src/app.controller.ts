import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // abc
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // abc/123
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/love') // abc/123
  getLove(): string {
    return this.appService.getLove();
  }
}
