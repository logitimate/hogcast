import { Episode } from './episodes/episode.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodesModule } from './episodes/episodes.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.HOST || 'localhost',
    port: 3306,
    username: process.env.USERNAME || 'root',
    password: process.env.PASSWORD || 'root',
    database: process.env.DB || 'test',
    entities: [Episode],
    synchronize: true
  }), EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
