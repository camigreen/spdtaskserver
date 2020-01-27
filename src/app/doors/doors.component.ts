import { Component, OnInit } from '@angular/core';
import { InfiniasService } from '../infinias.service';
import { Door, Gates, DoorStatus } from "../infinias.datatypes";
import { interval } from "rxjs"

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {

  public gates:DoorStatus[];

  constructor(private _infiniasService: InfiniasService) { }

  ngOnInit() {
    const secondsCounter = interval(10000);
    secondsCounter.subscribe(n => {
      this.heartbeat();
    })  
    
  }

  heartbeat () {
    this._infiniasService.getDoors()
      .subscribe(gates => {
      this.gates = gates;
    });
  }

  open(id) {
    console.log(id);
    this._infiniasService.open(id);
  }

}
