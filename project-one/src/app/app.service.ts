import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const age = 78;
    return 'Hello World!';
  }
}
