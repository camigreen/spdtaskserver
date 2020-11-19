import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { InfiniasService } from '../infinias.service';
import { AlertService } from '../alert/alert.service';
import { DoorStatus, reqOptions } from "../infinias.datatypes";

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})

export class DoorsComponent implements OnInit {

  public doors = [];
  protected _doors = {};
  public logText = [];
  private selectedDoors = [2,4];
  private selectedGates = [17,66,72,74];
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
    VehicleExiting: {
      light: 'led-yellow',
      text: 'Vehicle(s) Exiting'
    },
    HeldOpen: {
      light: 'led-blue',
      text: 'Held Open'
    },
    Offline: {
      light: 'led-none',
      text: 'Offline'
    },
    unknown: {
      light: 'led-none',
      text: 'Unknown Status'
    }
  }

  constructor(private _infiniasService: InfiniasService, private _alert: AlertService ) { }

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
      if(this.selectedDoors.includes(door.Id) || this.selectedGates.includes(door.Id)) {
        if(door.ControllerStatus == "Offline") {
          door.DoorStatus = "Offline";
        }
        if (this.selectedGates.includes(door.Id)) {
          if(door.DoorStatus == "ForcedOpen") {
            door.DoorStatus = "VehicleExiting";
          }
        }
        if(i < 4) {
          
          group.push(door);
          i++;
        } else {
          result.push(group);
          group = [];
          group.push(door);
          i = 1;
        }
        this._doors[door.Id] = door;
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
    console.log(this._doors[ids]);
    var door = this._doors[ids];
    if (door.ControllerStatus == "Offline") {
      this.log('"'+this._doors[ids].Door+'" is Offline.');
    } else {
      this.log('"'+this._doors[ids].Door+'" temporarily unlocked.');
      this._infiniasService.unlock(options).subscribe();
    }
    
  }

  lockOpen(ids: string) {
    var options:reqOptions = {
      doorIDs: ids,
      duration: 0
    };
    console.log(this._doors[ids]);
    var door = this._doors[ids];
    if (door.ControllerStatus == "Offline") {
      this.log('"'+this._doors[ids].Door+'" is Offline.');
    } else {
      this.log('"'+this._doors[ids].Door+'" is locked OPEN.');
      this._infiniasService.unlock(options).subscribe();
    }
    
  }

  lockNormal(ids: string) {
    var options:reqOptions = {
      doorIDs: ids,
      lockStatus: 'Normal'
    };

    this.log('"'+this._doors[ids].Door+'" has been returned to the schedule.');
    this._infiniasService.lock(options).subscribe();
  }

  emergencyUnlock() {
    var options:reqOptions = {
      doorIDs: '17,66,72,74',
      duration: 0
    };

    this.log('Door(s) '+options.doorIDs+' emergency opened!');
    this._infiniasService.unlock(options).subscribe();
  }

  emergencyLock() {
    var options:reqOptions = {
      doorIDs: '17,66,72,74',
      lockStatus: 'Locked'
    };

    this.log('Door(s) '+options.doorIDs+' emergency locked!');
    this._infiniasService.unlock(options).subscribe();
  }

  log(data: string) {
    this._alert.show(data, { classname: 'bg-success text-light', delay: 100000 });
    this.logText.push(data);
    console.log(data);
  }

}


