import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfiniasService } from './infinias.service';
import { DoorsComponent } from './doors/doors.component';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DoorsComponent
  ],
  providers: [ InfiniasService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

 

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/