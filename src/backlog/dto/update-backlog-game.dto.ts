import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateBacklogGameDto {
  @Field()
  backlogId: string;
  
  @Field()
  gameId: string;
}
