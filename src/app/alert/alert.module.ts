import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser'

import { AlertComponent } from './alert.component';

import { AlertService } from './alert.service';




@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule
  ],
  providers: [ AlertService ],
  exports: [ AlertComponent ]
})
export class AlertModule {}
