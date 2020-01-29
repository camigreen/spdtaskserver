import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoorResults, DoorResult, DoorStatus, Door } from "./infinias.datatypes";
import { Observable, of } from 'rxjs';

@Injectable( )
export class InfiniasService {

  private settings = {
    intervalDuration: 1000
  };
  public doors:DoorStatus[] = [];

  constructor(private http: HttpClient) { }

  heartbeat() {
    var self = this;
    return Observable.create(function (obs) {
      setInterval(function() {
        self.getDoors()
          .subscribe(data => {
              self.doors = data['Values'];
              for(let door in data['Values']) {
              }
          })
          obs.next(self.doors);
      }, self.settings.intervalDuration)
    })
    
  }

  getDoors() {
    return this.http.get('http://localhost:3000/api/doors/');
  } 

  getDoor(id):Observable<DoorResult> {
    return this.http.get<(DoorResult)>('http://localhost:3000/api/doors/'+id);
  }

  open(id) {
    console.log('Opening '+id+' from service.');
    return this.http.get<{}>('http://localhost:3000/api/doors/'+id+'/open');
  }

  close(id) {
    console.log('Closing '+id+' from service.');
    return this.http.get<{}>('http://localhost:3000/api/doors/'+id+'/close');
  }

}
