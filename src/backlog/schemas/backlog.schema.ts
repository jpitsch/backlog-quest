import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type BacklogDocument = HydratedDocument<Backlog>;

@ObjectType()
class BacklogGame {
  @Field()
  @Prop({ type: Types.ObjectId, ref: 'Games'})
  game: Types.ObjectId;

  @Field()
  @Prop()
  status: string;

  @Field()
  @Prop()
  timeSpent: number;
}

@ObjectType()
@Schema()
export class Backlog {
  @Field()
  @Prop()
  name: string;

  // TODO: Need to add this after users are part of the system.
  // @Field()
  // @Prop({ type: Types.ObjectId, ref: 'User' })
  // userId: Types.ObjectId;

  @Field()
  @Prop({ type: [BacklogGame] })
  games: BacklogGame[];
}
