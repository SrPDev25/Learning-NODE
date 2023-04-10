import { Test, TestingModule } from '@nestjs/testing';
import { CosasService } from './cosas.service';

describe('CosasService', () => {
  let service: CosasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CosasService],
    }).compile();

    service = module.get<CosasService>(CosasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
