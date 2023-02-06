import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiEscapeRoomService } from './core/services/api-escape-room.service';
import { TransformEscapeRoomService } from './core/services/transform-escape-room.service';

import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Se importa después de BrowserModule
    AppRoutingModule,
    CoreModule // El único sitio en el que se importa core
  ],
  providers: [
    ApiEscapeRoomService,
    TransformEscapeRoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
