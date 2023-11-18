import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { BacklogService } from "./backlog.service";
import { Backlog } from "./schemas/backlog.schema";
import { CreateBacklogDto } from './dto/create-backlog.dto';
import { UpdateBacklogGameDto } from './dto/update-backlog-game.dto';

@Resolver(of => Backlog)
export class BacklogResolver {
  constructor(private backlogService: BacklogService) {}

  @Query(returns => [Backlog])
  async backlogs() {
    return this.backlogService.findAll();
  }

  @Mutation(returns => Backlog)
  async create(@Args('createBacklogData') createBacklogData: CreateBacklogDto) {
    return this.backlogService.create(createBacklogData);
  }

  @Mutation(returns => Backlog)
  async addGameToBacklog(@Args('updateBacklogGameDto') updateBacklogGameDto: UpdateBacklogGameDto) {
    const backlog = await this.backlogService.addGame(updateBacklogGameDto);
    return backlog;
  }

  @Mutation(returns => Backlog)
  async removeGameFromBacklog(@Args('updateBacklogGameDto') updateBacklogGameDto: UpdateBacklogGameDto) {
    return this.backlogService.removeGame(updateBacklogGameDto);
  }
}