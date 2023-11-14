import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Backlog } from './schemas/backlog.schema';
import { CreateBacklogDto } from './dto/create-backlog.dto';
import { UpdateBacklogGameDto } from './dto/update-backlog-game.dto';

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

  async addGame(updateBacklogGameDto: UpdateBacklogGameDto) {
    const backlog =  await this.backlogModel.findOneAndUpdate(
      { _id: new Types.ObjectId(updateBacklogGameDto.backlogId) },
      { $push: { games: new Types.ObjectId(updateBacklogGameDto.gameId) } },
    );
  }

  async removeGame(updateBacklogGameDto: UpdateBacklogGameDto) {
    const backlog = await this.backlogModel.findOneAndUpdate(
      { _id: new Types.ObjectId(updateBacklogGameDto.backlogId) },
      { $pull: { games: { _id: new Types.ObjectId(updateBacklogGameDto.gameId) }} }
    );
  }

  async updatePlayedTime() {}
}
