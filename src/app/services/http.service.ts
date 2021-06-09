import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseURL: string = 'https://api.rawg.io/api';

  params = new HttpParams()
    .set('key', 'c52d1f197c8a48919f54b886a736ba47')
    .set('page', 10);

  constructor(private http: HttpClient) {}

  getGameList(): Observable<any> {
    return this.http.get(this.baseURL + '/games', {
      params: this.params,
    });
  }
}
