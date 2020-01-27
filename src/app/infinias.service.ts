import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from "./infinias.datatypes";
import { Observable, of } from 'rxjs';

@Injectable( )
export class InfiniasService {

  constructor(private http: HttpClient) { }

  getDoors():Observable<[]> {
    return this.http.get<[]>('http://localhost:3000/api/doors/');
  }

  getDoor(id):Observable<Result> {
    return this.http.get<(Result)>('http://localhost:3000/api/doors/'+id);
  }

  open(id) {
    this.http.get('http://localhost:3000/api/doors/'+id+'/open');
  }

}
