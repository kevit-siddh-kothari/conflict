import { Global, Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { addressSchema } from 'src/componets/address/entities/address.entity';
import { userSchema } from 'src/componets/user/entities/user.entity';
import { Collection } from 'src/global-constants/global.enum';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Collection.USER, schema: userSchema },
      { name: Collection.ADDRESS, schema: addressSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class GlobalModel {}
