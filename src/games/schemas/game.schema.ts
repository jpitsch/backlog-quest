import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type GameDocument = HydratedDocument<Game>;

@ObjectType()
@Schema()
export class Game {
  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  genre: string;

  @Field()
  @Prop()
  platform: string;

  @Field()
  @Prop()
  publisher: string;

  @Field()
  @Prop()
  boxImage: string;
  
  @Field({ nullable: true })
  @Prop()
  metacriticScore: number;

  @Field({ nullable: true })
  @Prop()
  storyOnly: number;

  @Field({ nullable: true })
  @Prop()
  storyPlus: number;

  @Field({ nullable: true })
  @Prop()
  fullCompletion: number;
  
  @Field({ nullable: true })
  @Prop()
  steamAppId: number;
  
  @Field({ nullable: true })
  @Prop()
  playstationId: string;
  
  @Field({ nullable: true })
  @Prop()
  nintendoId: string;
  
  @Field({ nullable: true })
  @Prop()
  xboxId: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
