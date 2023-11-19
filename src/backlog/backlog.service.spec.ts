import { Test, TestingModule } from '@nestjs/testing';
import { BacklogService } from './backlog.service';
import { getModelToken } from '@nestjs/mongoose';

class MockBacklogModel {
  async create() {}
  async update() {}
  async delete() {}
  async addGame() {}
  async removeGame() {}
  async updatePlayedTime() {}
}

describe('BacklogService', () => {
  let service: BacklogService;
  let mockBacklogModel: MockBacklogModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BacklogService,
        {
          provide: getModelToken('Backlog'),
          useClass: MockBacklogModel,
        }
      ],
    }).compile();

    service = module.get<BacklogService>(BacklogService);
    mockBacklogModel = module.get(getModelToken('Backlog'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
