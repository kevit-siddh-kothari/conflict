import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const c = 25;
    return 'Hello World!';
  }
}
