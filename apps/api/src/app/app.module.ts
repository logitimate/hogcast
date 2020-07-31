import { Episode } from './episodes/episode.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodesController } from './episodes/episodes.controller';
import { EpisodesModule } from './episodes/episodes.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "test",
    "entities": [Episode],
    "synchronize": true
  }), EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
