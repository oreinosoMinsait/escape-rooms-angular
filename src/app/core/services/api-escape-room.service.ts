import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiEscapeRoomI } from './models/escape-rooms.models';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiEscapeRoomService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiEscapeRooms(): Observable<ApiEscapeRoomI[]> {

    return this.http.get<ApiEscapeRoomI[]>(environment.API_URL);
  }
  
}
