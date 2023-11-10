import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Backlog } from './schemas/backlog.schema';
import { CreateBacklogDto } from './dto/create-backlog.dto';
import { AddGameDto } from './dto/add-game.dto';

@Injectable()
export class BacklogService {
  constructor(@InjectModel(Backlog.name) private readonly backlogModel: Model<Backlog>) {}

  async create(createBacklogDto: CreateBacklogDto) {
    return this.backlogModel.create(createBacklogDto);
  }

  async update() {}

  async delete() {}

  async addGame(addGameDto: AddGameDto) {
    const backlog = await this.backlogModel.findOneAndUpdate(
      { _id: new Types.ObjectId(addGameDto.backlogId) },
      { $push: { games: new Types.ObjectId(addGameDto.gameId) } },
    )
  }

  async removeGame() {}

  async updatePlayedTime() {}
}
