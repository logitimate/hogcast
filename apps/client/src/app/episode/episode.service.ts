import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransferStateService } from '@scullyio/ng-lib';
import { Episode } from '../models/episode';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient, private transferState: TransferStateService) { }

  getEpisodes(): Observable<Episode[]> {
    return this.transferState.useScullyTransferState(
      'episodes',
      this.http.get<Episode[]>(`${environment.api}/episodes`)
    )
  }

  getEpisode(id: string): Observable<Episode> {
    return this.transferState.useScullyTransferState(
      `episode${id}`,
      this.http.get<Episode>(`${environment.api}/episodes/${id}`)
    )
  }
}