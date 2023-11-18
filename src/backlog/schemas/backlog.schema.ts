import { HydratedDocument, Types, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Game } from 'src/games/schemas/game.schema';

export type BacklogDocument = HydratedDocument<Backlog>;

@ObjectType()
@Schema()
class BacklogGame {
  @Field(type => Game, { nullable: true })
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Game' })
  game: Game;

  @Field({ nullable: true })
  @Prop()
  priority?: number;

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
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId?: Types.ObjectId;

  @Field(type => [BacklogGame], { nullable: true })
  @Prop({ type: [BacklogGameSchema] })
  games?: Types.Array<BacklogGame>;
}

export const BacklogSchema = SchemaFactory.createForClass(Backlog);
