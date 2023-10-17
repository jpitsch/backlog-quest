import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
import { GamesService } from './games.service';
import { Game } from "./schemas/game.schema";

const moduleMocker = new ModuleMocker(global);

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(async () => {
    function mockGameModel(dto: any) {
      this.data = dto;
      this.create = () => {};
      this.find = () => {};
      this.findOneAndUpdate = () => {};
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesService,
        {
          provide: getModelToken('Game'),
          useValue: mockGameModel,
        },
      ],
    }).compile();

    service = module.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
