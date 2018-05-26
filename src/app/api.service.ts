import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // because of api (rest methods)
import { ApiInterface } from './api-interface'; // because of api (rest methods)
import { Observable } from 'rxjs/Observable'; // because of api (rest methods)

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  readDatabase(): Observable<ApiInterface[]> {
    return this.http.get<ApiInterface[]>('/api/read');
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

  updateInDatabase(junk: string): Observable<{}> {
    const tmpJunk = JSON.parse(junk);
    return this.http.post('/api/save', { _id: tmpJunk._id, name: tmpJunk.name, place: tmpJunk.place} );
  }

  addToDatabase(name: string, place: string): Observable<{}> {
    return this.http.post('/api/add', { name: name, place: place } );
  }

}
