import { Body, Controller, Post, Get } from '@nestjs/common';
import { BacklogService } from './backlog.service';
import { CreateBacklogDto } from './dto/create-backlog.dto';
import { AddGameDto } from './dto/add-game.dto';

@Controller('backlog')
export class BacklogController {
  constructor(private readonly backlogService: BacklogService) {}

  @Post('/create-backlog')
  async create(@Body() createBacklogDto: CreateBacklogDto) {
    return this.backlogService.create(createBacklogDto);
  }

  @Post('/add-game')
  async addGame(@Body() addGameDto: AddGameDto) {
    return this.backlogService.addGame(addGameDto);
  }
}
