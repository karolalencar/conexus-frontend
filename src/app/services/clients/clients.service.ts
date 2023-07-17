import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private /*readonly*/  apiUrl = 'http://localhost:8080/clients';

  constructor(private http: HttpClient) { }

  clientById(): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${1+1}`)
    .pipe(
      tap(response => console.log(response))
    );
  }

  clientServices(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/${1}/services`)
    .pipe(
      tap(response => console.log(response))
    );
  }
}
