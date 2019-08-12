import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaitapBusModule } from './baitap-bus/baitap-bus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaitapBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
