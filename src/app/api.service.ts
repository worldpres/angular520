import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiInterface } from './api-interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private _getUrl = '/api/read';

  constructor(private http: HttpClient) { }

  readDatabase(): Observable<ApiInterface[]> {
    return this.http.get<ApiInterface[]>(this._getUrl);
  }

  deleteFromDatabase(junkId: string): Observable<{}> {
    return this.http.delete('/api/delete/' + junkId);
  }

  addToDatabase(name: string, place: string): Observable<{}> {
    return this.http.put('/api/add', { name: name, place: place } );
  }

}
