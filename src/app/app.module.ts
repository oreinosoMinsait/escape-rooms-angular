import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscapeRoomsService } from './core/services/escape-rooms.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Se importa después de BrowserModule
    AppRoutingModule
  ],
  providers: [EscapeRoomsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
