import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType, ID } from '@nestjs/graphql';

export type BacklogDocument = HydratedDocument<Backlog>;

@ObjectType()
@Schema()
class BacklogGame {
  @Field(type => ID)
  @Prop({ type: Types.ObjectId, ref: 'Games'})
  game: Types.ObjectId;

  @Field()
  @Prop()
  status: string;

  @Field()
  @Prop()
  timeSpent: number;
}

export const BacklogGameSchema = SchemaFactory.createForClass(BacklogGame);

@ObjectType()
@Schema()
export class Backlog {
  @Field()
  @Prop()
  name: string;

  @Field(type => ID)
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId?: Types.ObjectId;

  @Field(type => [BacklogGame])
  @Prop({ type: [BacklogGameSchema] })
  games: Types.Array<BacklogGame>;
}

export const BacklogSchema = SchemaFactory.createForClass(Backlog);
