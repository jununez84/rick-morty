import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from '../models/character';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  constructor(private http: HttpClient) {}

  getCharacters(page?: number): Observable<Character[]> {
    const url = `${environment.api}character/`;
    return this.http.get<Character[]>(url).pipe(
      map((response: any) => {
        console.log('response', response);
        return response.results;
      })
    );
  }
}
