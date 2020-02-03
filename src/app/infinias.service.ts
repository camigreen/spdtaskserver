import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoorResults, DoorResult, DoorStatus, Door, reqOptions } from "./infinias.datatypes";
import { Observable, of } from 'rxjs';
import { doorlist } from './doorlist';

@Injectable( )
export class InfiniasService {

  private settings = {
    intervalDuration: 1000,
    server: "http://192.168.0.70",
    //server: "http://localhost",
    port: "3000"
  };
  public doors:DoorStatus[] = [];
  public doorlist = new doorlist().list;

  constructor(private http: HttpClient) { }

  heartbeat() {
    var self = this;
    return Observable.create(function (obs) {
      setInterval(function() {
        self.getDoors()
          .subscribe((data: DoorResults) => {
            self.doors = data['Values'];
          })
          obs.next(self.doors);
      }, self.settings.intervalDuration)
    })
    
  }

  getDoors() {
    // var self = this;
    // return Observable.create(function (obs) {
    //   obs.next(self.doorlist);
    // })
    return this.http.get(this.settings.server+':'+this.settings.port+'/api/doors/');
  } 

  getDoor(id):Observable<DoorResult> {
    return this.http.get<(DoorResult)>(this.settings.server+':'+this.settings.port+'/api/doors/'+id);
  }

  unlock(options: reqOptions) {
    console.log(options);
    return this.http.put<{}>(this.settings.server+':'+this.settings.port+'/api/doors/unlock', options);
  }

  lock(options: reqOptions) {
    console.log(options);
    return this.http.put<{}>(this.settings.server+':'+this.settings.port+'/api/doors/lock', options);
  }





}
