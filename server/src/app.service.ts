import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getLove(): string {
    return 'I Love nest.js Myao~~';
  }
}
