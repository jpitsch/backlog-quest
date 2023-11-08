import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type UserDocument = HydratedDocument<User>;

@ObjectType()
@Schema()
export class User {
  @Field()
  @Prop()
  id: string;

  @Field()
  @Prop()
  username: string;

  @Field()
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
