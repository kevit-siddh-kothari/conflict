import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const age = 12;
    return 'Hello World!';
  }
}
