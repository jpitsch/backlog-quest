import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { Game } from "./schemas/game.schema";
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Resolver(of => Game)
export class GamesResolver {
  constructor(private gamesService: GamesService) {}

  @Query(returns => [Game])
  async games() {
    return this.gamesService.findAll();
  }

  @Mutation(returns => Game)
  async createGame(@Args('createGameData') createGameData: CreateGameDto) {
    return this.gamesService.create(createGameData);
  }

  @Mutation(returns => Game)
  async updateGame(@Args('updateGameData') updateGameData: UpdateGameDto) {
    return this.gamesService.updateByName(updateGameData);
  }
}
