import { 
  Body, 
  Controller,
  Post, 
  HttpCode, 
  HttpStatus,
  Get,
  Request,
  Res,
  UseGuards, 
  BadRequestException
} from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    const user = await this.authService.signUp(createUserDto);
    if(user) {
      res.status(HttpStatus.CREATED);
    } else {
      throw new BadRequestException('User not created.');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
