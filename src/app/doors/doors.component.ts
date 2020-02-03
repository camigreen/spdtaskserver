import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InfiniasService } from '../infinias.service';
import { Door, Gates, DoorStatus, reqOptions } from "../infinias.datatypes";



@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})

export class DoorsComponent implements OnInit {

  public doors = [];
  public logText = [];
  public statusMap = {
    ClosedNormal: {
      light: 'led-green',
      text: 'Closed'
    },
    OpenNormal: {
      light: 'led-red',
      text: 'Open'
    },
    ForcedOpen: {
      light: 'led-yellow',
      text: 'Forced Open'
    },
    HeldOpen: {
      light: 'led-blue',
      text: 'Held Open'
    },
    unknown: {
      light: 'led-none',
      text: 'Unknown Status'
    }
  }

  constructor(private _infiniasService: InfiniasService) { }

  ngOnInit() {
    var temp: DoorStatus[];
    this._infiniasService.heartbeat()
      .subscribe((data: DoorStatus[]) => {
        this.renderData(data);
      }); 
  }

  renderData(data) {
    var i = 0;
    var result = [];
    var group = [];
    data.forEach((door: DoorStatus) => {
      if(door.Id == 2 || door.Id == 4 || door.Id == 17 || door.Id == 66) {
        if(i < 4) {
          group.push(door);
          i++;
        } else {
          result.push(group);
          group = [];
          group.push(door);
          i = 1;
        }
      }
    });
    result.push(group);
    this.doors = result;
  }

  unlockMomentary(ids: string) {
    var options:reqOptions = {
      doorIDs: ids,
      duration: 10
    };

    this.log('Door(s) '+ids+' momentarily unlocked.');
    this._infiniasService.unlock(options).subscribe();
  }

  lockNormal(ids: string) {
    var options:reqOptions = {
      doorIDs: ids,
      lockStatus: 'Normal'
    };

    this.log('Door(s) '+ids+' locked normally.');
    this._infiniasService.lock(options).subscribe();
  }

  emergencyUnlock() {
    var options:reqOptions = {
      doorIDs: '17,66',
      duration: 0
    };

    this.log('Door(s) '+options.doorIDs+' emergency opened!');
    this._infiniasService.unlock(options).subscribe();
  }

  emergencyLock() {
    var options:reqOptions = {
      doorIDs: '17,66',
      lockStatus: 'Locked'
    };

    this.log('Door(s) '+options.doorIDs+' emergency locked!');
    this._infiniasService.unlock(options).subscribe();
  }

  log(data: string) {
    this.logText.push(data);
    console.log(data);
  }

}


