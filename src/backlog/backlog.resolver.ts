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
  async addGameToBacklog(@Args('input') updateBacklogGameDto: UpdateBacklogGameDto) {
    return this.backlogService.addGame(updateBacklogGameDto);
  }

  @Mutation(returns => Backlog)
  async removeGameFromBacklog(@Args('input') updateGameDto: UpdateBacklogGameDto) {}
}