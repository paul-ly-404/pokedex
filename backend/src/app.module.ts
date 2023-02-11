import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GridController } from './grid/grid.controller';
import { GridService } from './grid/grid.service';

@Module({
  controllers: [AppController, GridController],
  providers: [AppService, GridService],
})
export class AppModule {}
