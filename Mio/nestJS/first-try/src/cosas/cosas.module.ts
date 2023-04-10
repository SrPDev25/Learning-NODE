import { Module } from '@nestjs/common';
import { CosasService } from './cosas.service';
import { CosasController } from './cosas.controller';

@Module({
  controllers: [CosasController],
  providers: [CosasService]
})
export class CosasModule {}
