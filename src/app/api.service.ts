import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiInterface } from './api-interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private _url = '/api/read';

  constructor(private http: HttpClient) { }

  readDatabase(): Observable<ApiInterface[]> {
    return this.http.get<ApiInterface[]>(this._url);
  }

}
