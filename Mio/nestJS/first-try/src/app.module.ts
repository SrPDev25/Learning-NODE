import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CosasModule } from './cosas/cosas.module';

@Module({
  imports: [CosasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
