import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseURL: string = 'https://api.rawg.io/api';

  constructor(private http: HttpClient) {}

  getGameData(page?: number, page_size?: number): Observable<APIResponse> {
    let params = new HttpParams().set(
      'key',
      'c52d1f197c8a48919f54b886a736ba47'
    );

    if (page) {
      params = params.set('page', page);
    }

    if (page_size) {
      params = params.set('page_size', page_size);
    }

    return this.http.get<APIResponse>(this.baseURL + '/games', {
      params: params,
    });
  }
}
