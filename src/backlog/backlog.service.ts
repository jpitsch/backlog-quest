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

  async delete(id: string) {
    return this.backlogModel.deleteOne(
      { _id: new Types.ObjectId(id) }
    );
  }

  async findAll() {
    return this.backlogModel.find().exec();
  }

  async addGame(id: string, addGameDto: AddGameDto) {
    const backlog =  await this.backlogModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { $push: { games: new Types.ObjectId(addGameDto.gameId) } },
    );
  }

  async removeGame(id: string, gameId: string) {
    const backlog = await this.backlogModel.findOneAndUpdate(
      { _id: new Types.ObjectId(id) },
      { $pull: { games: { _id: new Types.ObjectId(gameId) }} }
    );
  }

  async updatePlayedTime() {}
}
