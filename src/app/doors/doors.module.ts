import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AlertModule } from '../alert/alert.module';

import { DoorsComponent } from './doors.component';

import { InfiniasService } from '../infinias.service';


@NgModule({
  imports: [
      HttpClientModule,
      AlertModule,
      BrowserModule  
  ],
  declarations: [
    DoorsComponent
  ],
  providers: [ 
    InfiniasService 
  ],
  exports: [ 
    DoorsComponent 
  ]
})
export class DoorsModule {}