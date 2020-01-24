import { Component, OnInit } from '@angular/core';
import { InfiniasService } from '../infinias.service';
import { Door } from "../infinias.door";

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {

  public doors:Door[] = [];

  constructor(private _infiniasService: InfiniasService) { }

  ngOnInit() {
    this._infiniasService.getDoors()
      .subscribe(data => {
        this.doors = data.Values;
      });
     // console.log(this.doors);
  }

}
