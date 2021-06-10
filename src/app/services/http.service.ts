import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseURL: string = 'https://api.rawg.io/api';

  params = new HttpParams()
    .set('key', 'c52d1f197c8a48919f54b886a736ba47')
    .set('page', 1);

  constructor(private http: HttpClient) {}

  getGameList(): Observable<APIResponse<Game>> {
    return this.http.get<APIResponse<Game>>(this.baseURL + '/games', {
      params: this.params,
    });
  }
}
