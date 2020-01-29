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
    unknown: {
      light: 'led-none',
      text: 'Unknown Status'
    }
  }

  constructor(private _infiniasService: InfiniasService) { }

  ngOnInit() {
    var self = this;
    this._infiniasService.heartbeat()
      .subscribe((doors: DoorStatus[]) => {
        console.log(doors);
      }); 
      console.log(this.doors);
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
