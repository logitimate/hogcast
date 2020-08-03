import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
  constructor(private readonly episodeService: EpisodesService) {}

  @Get()
  findAll() {
    return this.episodeService.findAll();
  }

  @Get('changed')
  changed() {
    return this.episodeService.changed();
  }

  @Get('reset-changes')
  resetChanges(@Query('fullRebuild') fullRebuild: boolean) {
    return this.episodeService.resetChanges(fullRebuild);
  }

  @Get(':id')
  getEpisode(@Param('id') id) {
    return this.episodeService.getEpisode(id);
  }

  @Put(':id')
  updateEpisode(@Param('id') id, @Body() newEpisode) {
    return this.episodeService.updateEpisode(id, newEpisode);
  }

  @Post()
  async create(@Req() request, @Res() response) {
    try {
      return this.episodeService.create(request);
    } catch (err) {
      response.status(HttpStatus.BAD_REQUEST).json(err);
    }
  }

  @Post('multi')
  async createMultiple(@Req() request, @Res() response) {
    try {
      return this.episodeService.createMultiple(request, response);
    } catch (err) {
      response.status(HttpStatus.BAD_REQUEST).json(err);
    }
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.episodeService.deleteEpisode(id);
  }
}
