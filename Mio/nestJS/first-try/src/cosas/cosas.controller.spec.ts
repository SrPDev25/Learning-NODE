import { Test, TestingModule } from '@nestjs/testing';
import { CosasController } from './cosas.controller';
import { CosasService } from './cosas.service';

describe('CosasController', () => {
  let controller: CosasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CosasController],
      providers: [CosasService],
    }).compile();

    controller = module.get<CosasController>(CosasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
