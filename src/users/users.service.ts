import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { encodePassword } from '../utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const password = await encodePassword(createUserDto.password);
    return this.userModel.create({ ...createUserDto, password });
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username: username}).exec();
  }
}
