import { EpisodesController } from './episodes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { Episode } from './episode.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Episode])],
  providers: [EpisodesService],
  controllers: [EpisodesController]
})

export class EpisodesModule {
}
