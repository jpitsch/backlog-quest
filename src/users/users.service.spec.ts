import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { encodePassword } from '../utils/bcrypt';

class MockUserModel {
  create(createData: CreateUserDto) {}
  findOne(find: string) {}
}

jest.mock('../utils/bcrypt', () => {
  return {
    encodePassword: jest.fn(),
  }
});

describe('UsersService', () => {
  let service: UsersService;
  let mockUserModel: MockUserModel;
  let mockEncodePassword: jest.Mock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken('User'),
          useClass: MockUserModel
        }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    mockUserModel = module.get(getModelToken('User'));

    mockEncodePassword = encodePassword as jest.Mock;
    mockEncodePassword.mockReturnValue('someencodedpassword');
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should create user with encrypted password', async () => {
      const createUser = { username: 'Jason', password: 'somepass', passwordConfirm: 'somepass'}
      const modelSpy = jest.spyOn(mockUserModel, 'create');
      await service.create(createUser);
      expect(modelSpy).toBeCalledWith({ ...createUser, password: 'someencodedpassword' });
    });
  });

  describe('findOneByUsername()', () => {
    it('should return the correct user based on username', async () => {
      const mockFindOne = {
        exec: jest.fn(),
      }
      mockUserModel.findOne = jest.fn().mockImplementationOnce(() => mockFindOne)
      const modelSpy = jest.spyOn(mockUserModel, 'findOne');
      await service.findOneByUsername('Link');
      expect(modelSpy).toBeCalledWith({ 'username': 'Link' });
    });
  });
});
