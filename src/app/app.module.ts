import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DoorsModule } from './doors/doors.module';


@NgModule({
  imports: [
    DoorsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/