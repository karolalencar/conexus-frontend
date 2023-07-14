import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professional } from '../../models/professional';

import { Observable, delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {

  //private readonly API = '../../assets/professionals.js';
  private apiUrl = 'http://localhost:8080/professionals';

  constructor(private http: HttpClient) { }

  professionalsList(): Observable<Professional[]> {
    return this.http.get<Professional[]>(this.apiUrl)
    .pipe(
     /* first(),*/
      delay(5000),
      tap(response => console.log(response))
    );
  }
}
