import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGameDto {
  @Field()
  readonly name: string;

  @Field()
  readonly genre: string;

  @Field()
  readonly platform: string;

  @Field()
  readonly publisher: string;

  @Field({ nullable: true })
  readonly boxImage?: string;

  @Field({ nullable: true })
  readonly metacriticScore?: number;

  @Field({ nullable: true })
  readonly storyOnly?: number;

  @Field({ nullable: true })
  readonly storyPlus?: number;

  @Field({ nullable: true })
  readonly fullCompletion?: number;

  @Field({ nullable: true })
  readonly steamAppId?: number;

  @Field({ nullable: true })
  readonly playstationId?: string;

  @Field({ nullable: true })
  readonly nintendoId?: string;

  @Field({ nullable: true })
  readonly xboxId?: string;
}
