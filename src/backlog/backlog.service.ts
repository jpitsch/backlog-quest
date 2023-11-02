import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Backlog } from './schemas/backlog.schema';

@Injectable()
export class BacklogService {
  constructor(@InjectModel(Backlog.name) private readonly backlogModel: Model<Backlog>) {}

  async create() {}

  async update() {}

  async delete() {}

  async addGame() {}

  async removeGame() {}

  async updatePlayedTime() {}
}
