import { Component, OnInit } from '@angular/core';

import { EscapeRoomsService } from 'src/app/core/services/escape-rooms.service';
import { EscapeRoomI } from 'src/app/core/services/models/escape-rooms.models';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public escapeRooms$?: Observable<EscapeRoomI[]>;

  constructor(
    private escapeRoomService: EscapeRoomsService
  ) { }

  ngOnInit(): void {
    this.getEscapeRooms();
  }

  public getEscapeRooms() {
    this.escapeRooms$ = this.escapeRoomService.getEscapeRooms().pipe(
      take(1)
    );
  }


}
