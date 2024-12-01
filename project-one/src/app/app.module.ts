import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../componets/user/user.module';
import { AddressModule } from '../componets/address/address.module';
// import { GlobalModel } from 'src/global-model.ts/global-model.ts.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConnectionMongodb } from 'src/db-connection/db-connection';
import { GlobalModel } from 'src/global-model.ts/global-model.ts.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    GlobalModel,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConnectionMongodb,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
