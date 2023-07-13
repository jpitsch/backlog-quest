import { Controller, Get, Post, Body } from '@nestjs/common';
import { Game } from './schemas/game.schema';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Post()
  async update(@Body() updateGameDto: CreateGameDto) {
    return this.gamesService.updateByName(updateGameDto);
  }

  @Get()
  async findAll(): Promise<Game[]> {
    return this.gamesService.findAll();
  }
}
