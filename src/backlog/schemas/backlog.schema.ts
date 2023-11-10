import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type BacklogDocument = HydratedDocument<Backlog>;

@ObjectType()
@Schema()
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

export const BacklogGameSchema = SchemaFactory.createForClass(BacklogGame);

@ObjectType()
@Schema()
export class Backlog {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId?: Types.ObjectId;

  @Field()
  @Prop({ type: [BacklogGameSchema] })
  games: Types.Array<BacklogGame>;
}

export const BacklogSchema = SchemaFactory.createForClass(Backlog);
