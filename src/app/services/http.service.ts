import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseURL: string = 'https://api.rawg.io/api';
  KEY: string = 'c52d1f197c8a48919f54b886a736ba47';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseURL + '/games' + '?key=' + this.KEY);
  }
}
