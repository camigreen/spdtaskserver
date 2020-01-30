import { Component, OnInit } from '@angular/core';
import { InfiniasService } from '../infinias.service';
import { Door, Gates, DoorStatus } from "../infinias.datatypes";

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {

  public doors = [];
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
    console.log(group);
    result.push(group);
    this.doors = result;
  }

  open(id) {
    console.log('Opening '+id+' from component.');
    this._infiniasService.open(id).subscribe();
  }

  close(id) {
    console.log('Closing '+id+' from component.');
    this._infiniasService.close(id).subscribe();
  }



}
