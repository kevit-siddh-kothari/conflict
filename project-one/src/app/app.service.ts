import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const age = 25;
    return 'Hello World!';
  }
}
