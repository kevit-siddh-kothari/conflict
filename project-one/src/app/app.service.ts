import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const c = 78;
    return 'Hello World!';
  }
}
