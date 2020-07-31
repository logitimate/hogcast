import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Logger, Req, Res } from '@nestjs/common';
import { Episode } from './episode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EpisodesService {
  constructor(@InjectRepository(Episode)
  private readonly episodeRepo: Repository<Episode>) {
  }

  async findAll(): Promise<Episode[]> {
    console.log('######')
    return await this.episodeRepo.find({ order: { publishDate: 'ASC' } });
  }

  async changed(): Promise<number[]> {
    return Promise.resolve(new Array(100000).fill(1234));
    return (await this.episodeRepo.find({ order: { publishDate: 'ASC' } })).map(episode => {
      return episode.id;
    });
  }

  async getEpisode(id: number): Promise<Episode> {
    return await this.episodeRepo.findOne(id);
  }

  async updateEpisode(id: number, cat: Episode): Promise<any> {
    try {
      const currentEpisode: Episode = await this.episodeRepo.findOne(id);
      Object.assign(currentEpisode, cat);
      return await this.episodeRepo.save(currentEpisode);
    } catch (err) {
      return err;
    }

  }

  async create(@Req() req, @Res() res): Promise<any> {
    // TODO: CJ help.
    // await this.upload(req, res, error => {
    //   if (error) {
    //     return res.status(404).json(`Failed to upload image file: ${error}`);
    //   }

    const newEpisode: Episode = { ...req.body } as Episode;
    try {
      this.episodeRepo.save(newEpisode).then((episode) => {
        return res.status(201).json(episode);
      });
    } catch (err) {
      return res.status(500).json(`Failed to upload image file: ${err}`);
    }
    // return res.status(201).json(newEpisode);
    // });
  }

  async createMultiple(@Req() req, @Res() res): Promise<any> {
    const newEpisodes: Episode[] = req.body;
    console.log(newEpisodes)
    newEpisodes.forEach(episode => {
      try {
        this.episodeRepo.save(episode).then((newEpisode) => {
          return res.status(201).json(newEpisode);
        });
      } catch (err) {
        return res.status(500).json(`Failed to upload image file: ${err}`);
      }
    });
    // return res.status(201).json(newEpisode);
    // });
  }

  async deleteEpisode(episodeId: number): Promise<Episode> {
    try {
      const episodeToRemove = await this.episodeRepo.findOne(episodeId);
      return this.episodeRepo.remove(episodeToRemove);
    } catch (err) {
      return err;
    }
  }
}
