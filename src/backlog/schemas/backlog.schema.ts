import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType, ID } from '@nestjs/graphql';

export type BacklogDocument = HydratedDocument<Backlog>;

@ObjectType()
@Schema()
class BacklogGame {
  @Field(type => ID, { nullable: true })
  @Prop({ type: Types.ObjectId, ref: 'Games' })
  _id: Types.ObjectId;

  @Field({ nullable: true })
  @Prop()
  status?: string;

  @Field({ nullable: true })
  @Prop()
  timeSpent?: number;
}

export const BacklogGameSchema = SchemaFactory.createForClass(BacklogGame);

@ObjectType()
@Schema()
export class Backlog {
  @Field(type => ID)
  _id: Types.ObjectId;

  @Field()
  @Prop()
  name: string;

  @Field(type => ID)
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId?: Types.ObjectId;

  @Field(type => [BacklogGame], { nullable: true })
  @Prop({ type: [BacklogGameSchema] })
  games?: Types.Array<BacklogGame>;
}

export const BacklogSchema = SchemaFactory.createForClass(Backlog);
