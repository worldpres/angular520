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
  delDatabase(): Observable<{}> {
    return this.http.delete('/api/clean/');
  }
  copyDatabase(): Observable<{}> {
    return this.http.put('/api/import/', {});
  }


  deleteFromDatabase(junkId: string): Observable<{}> {
    return this.http.delete('/api/delete/' + junkId);
  }

  updateDatabase(junk: string): Observable<{}> {
    const tmpJunk = JSON.parse(junk);
    return this.http.post('/api/save', { _id: tmpJunk._id, name: tmpJunk.name, place: tmpJunk.place} );
  }

  addToDatabase(name: string, place: string): Observable<{}> {
    return this.http.post('/api/add', { name: name, place: place } );
  }

  cleanDatabase(): Observable<{}> {
    return this.http.get('/api/clean');
  }

}
