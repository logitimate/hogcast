import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Req, Res } from '@nestjs/common';
import { Episode } from './episode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectRepository(Episode) private readonly episodeRepo: Repository<Episode>
  ) {}

  async findAll(): Promise<Episode[]> {
    return await this.episodeRepo.find({ order: { publishDate: 'ASC' } });
  }

  async changed(): Promise<number[]> {
    return (await this.episodeRepo.find({ changed: true })).map(
      (episode) => episode.id
    );
  }

  async getEpisode(id: number): Promise<Episode> {
    return await this.episodeRepo.findOne(id);
  }

  async updateEpisode(id: number, episode: Episode): Promise<any> {
    try {
      const currentEpisode: Episode = await this.episodeRepo.findOne(id);
      return await this.episodeRepo.save({
        ...currentEpisode,
        description: episode.description,
        imageLink: episode.description,
        keywords: episode.keywords,
        name: episode.name,
        summary: episode.summary,
        link: episode.link,
        changed: true,
      });
    } catch (err) {
      return err;
    }
  }

  async resetChanges(fullRebuild = false): Promise<void> {
    const query = `update episode set changed = ${fullRebuild};`;
    await this.episodeRepo.query(query);
  }

  async create(episode: Episode): Promise<any> {
    // TODO: CJ help.
    // await this.upload(req, res, error => {
    //   if (error) {
    //     return res.status(404).json(`Failed to upload image file: ${error}`);
    //   }

    try {
      return this.episodeRepo.save(episode);
    } catch (err) {
      return err;
    }
    // return res.status(201).json(newEpisode);
    // });
  }

  async createMultiple(@Req() req, @Res() res): Promise<any> {
    const newEpisodes: Episode[] = req.body;
    newEpisodes.forEach((episode) => {
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
