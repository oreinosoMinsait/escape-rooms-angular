import { Injectable } from '@angular/core';
import { ApiEscapeRoomI, EscapeRoomI } from "./models/escape-rooms.models";
import { ApiEscapeRoomService } from './api-escape-room.service';
import { transformEscapeRooms } from './models/transformer';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformEscapeRoomService {

  constructor(
    private ApiEcapeRoomService: ApiEscapeRoomService
  ) { }

  public getTransformedEscapeRooms(): Observable<EscapeRoomI[]> {

    return this.ApiEcapeRoomService.getApiEscapeRooms().pipe(
      map((er: ApiEscapeRoomI[]) => {
        return transformEscapeRooms(er);
      })
    )
  }

}
