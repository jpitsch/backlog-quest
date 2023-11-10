import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './schemas/game.schema';

@Injectable()
export class GamesService {
  constructor(@InjectModel(Game.name) private readonly gameModel: Model<Game>) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    return this.gameModel.create(createGameDto);
  }

  async updateByName(updateGameDto: UpdateGameDto): Promise<Game> {
    const filter = { name: updateGameDto.name };
    return this.gameModel.findOneAndUpdate(filter, updateGameDto);
  }

  async findAll(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }
}
