import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBacklogDto {
  @Field()
  readonly name: string;

  @Field()
  readonly userId: string;
}
