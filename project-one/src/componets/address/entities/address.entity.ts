import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Collection } from 'src/global-constants/global.enum';

@Schema({ timestamps: true, collection: Collection.ADDRESS })
export class Address {
  @Prop({ type: String })
  state: string;

  @Prop({ type: String })
  city: string;
}

export type addressDocument = Document & Address;

export const addressSchema = SchemaFactory.createForClass(Address);
