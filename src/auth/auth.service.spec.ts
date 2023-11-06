import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
      ],
    }).useMocker((token) => {
      if(token === UsersService) {
        return {
          create: jest.fn().mockResolvedValue({}),
          findOne: jest.fn().mockResolvedValue({}),
        }
      }

      if(token === JwtService) {
        return {
          signAsync: jest.fn().mockResolvedValue({}),
        }
      }
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
