import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;
  let authGuard: AuthGuard;

  const mockAuthService = {
    signIn: jest.fn().mockResolvedValue({}),
    signUp: jest.fn().mockResolvedValue({})
  };
  const mockJwtService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: AuthGuard, useValue: jest.fn().mockImplementation(() => true )},
        { provide: JwtService, useValue: jest.fn().mockImplementation(() => true )},
      ]
    })
    .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
