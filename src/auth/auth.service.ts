import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { comparePassword } from '../utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if(user) {
      const validPass = comparePassword(pass, user.password);

      if(validPass) {
        const payload = { sub: user.id, username: user.username };

        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      } else {
        throw new UnauthorizedException();
      }
    }
  }

  async signUp(createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return user;
  }
}
