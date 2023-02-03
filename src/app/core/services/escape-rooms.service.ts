import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscapeRoomI } from './models/escape-rooms.models';
import { environment } from 'src/environments/environment';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class EscapeRoomsService {

  constructor(
    private http: HttpClient
  ) { }

  public getEscapeRooms(): Observable<EscapeRoomI[]> {

    return this.http.get<EscapeRoomI[]>(environment.API_URL);
  }
}
