import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { GamesService } from './games.service';

describe('GamesService', () => {
  let service: GamesService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesService,
        {
          provide: getModelToken('Game'),
          useValue: {
            create: jest.fn().mockResolvedValue({ name: 'Final Fantasy' }),
            find: jest.fn().mockResolvedValue({}),
            findOneAndUpdate: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a newly created game on creation', async () => {
    let gameEntity = { 
      name: '',
      genre: '',
      platform: '',
      publisher: '',
    }

    let game = await service.create(gameEntity);
    expect(game.name).toEqual('Final Fantasy');
  })
});
