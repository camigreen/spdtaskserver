import { Component, OnInit } from '@angular/core';
import { InfiniasService } from '../infinias.service';

@Component({
  selector: 'app-door-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: []
})
export class ProductListComponent implements OnInit {
  public doors = [];

  constructor(private _infiniasService: InfiniasService ) {}

  ngOnInit() {
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/