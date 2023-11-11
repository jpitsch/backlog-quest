import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { BacklogService } from './backlog.service';
import { CreateBacklogDto } from './dto/create-backlog.dto';
import { AddGameDto } from './dto/add-game.dto';

@Controller('backlog')
export class BacklogController {
  constructor(private readonly backlogService: BacklogService) {}

  @Get()
  async get() {
    return this.backlogService.findAll();
  }

  @Post('/create-backlog')
  async create(@Body() createBacklogDto: CreateBacklogDto) {
    return this.backlogService.create(createBacklogDto);
  }

  @Post(':id/game')
  async addGame(@Param('id') id: string, @Body() addGameDto: AddGameDto) {
    return this.backlogService.addGame(id, addGameDto);
  }

  @Delete(':id/game/:gameId')
  async removeGame(@Param('id') id: string, @Param('gameId') gameId: string) {
    return this.backlogService.removeGame(id, gameId);
  }
}
