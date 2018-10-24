import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MiniCalendarModule } from './lib/mini-calendar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MiniCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
