import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from "./infinias.results";
import { Door } from "./infinias.door";
import { Observable, of } from 'rxjs';

@Injectable( )
export class InfiniasService {

  constructor(private http: HttpClient) { }

  getDoors():Observable<Results> {
    return this.http.get<(Results)>('http://localhost:3000/api/doors');
  }
}
