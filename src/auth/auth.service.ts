import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { comparePassword } from '../utils/bcrypt';
import { User } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);

    if(user) {
      const validPass = comparePassword(pass, user.password);

      if(validPass) {
        const result = {
          username: user.username,
          id: user['_id'].toString(),
        };
      
        return result;
      } else {
        throw new UnauthorizedException();
      }
    }
  }

  async signIn(user: any) {
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    if(user) {
      return user;
    }

    return false;
  }
}
