import { Test, TestingModule } from '@nestjs/testing';
import { BacklogController } from './backlog.controller';
import { BacklogService } from './backlog.service';

describe('BacklogController', () => {
  let controller: BacklogController;

  const mockBacklogService = {
    create: jest.fn().mockResolvedValue({}),
    update: jest.fn().mockResolvedValue({}),
    delete: jest.fn().mockResolvedValue({}),
    findAll: jest.fn().mockResolvedValue({}),
    addGame: jest.fn().mockResolvedValue({}),
    removeGame: jest.fn().mockResolvedValue({}),
    updatePlayedTime: jest.fn().mockResolvedValue({}),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BacklogController],
      providers: [
        { provide: BacklogService, useValue: mockBacklogService }
      ]
    }).compile();

    controller = module.get<BacklogController>(BacklogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
