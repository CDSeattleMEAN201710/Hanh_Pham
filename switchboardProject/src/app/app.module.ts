import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchboardAppComponent } from './switchboard-app/switchboard-app.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchboardAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
