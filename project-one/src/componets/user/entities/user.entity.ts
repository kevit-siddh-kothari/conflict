import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Collection, Role } from 'src/global-constants/global.enum';
import { Document, Types } from 'mongoose';
import { comments } from 'src/global-interface/global.interface';
@Schema({ timestamps: true, collection: Collection.USER })
export class User {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  surname: string;

  @Prop({ type: Number, required: true })
  pnNo: number;

  @Prop(
    raw([
      {
        name: { type: String },
        comment: { type: String },
      },
    ]),
  )
  comments: comments[];

  @Prop({ type: Types.ObjectId, required: true, ref: Collection.ADDRESS })
  address: String | Types.ObjectId;

  @Prop({ type: String, enum: Object.keys(Role), default: Role.ADMIN })
  role: Role;
}

export type userDocument = Document & User;

export const userSchema = SchemaFactory.createForClass(User);
