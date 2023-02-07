import { Component, OnInit } from '@angular/core';

import { TransformEscapeRoomService } from 'src/app/core/services/transform-escape-room.service';
import { EscapeRoomI } from 'src/app/core/services/models/escape-rooms.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public escapeRooms$?: Observable<EscapeRoomI[]>;
  public filterWords = '';
  public pageSizes = [5, 10, 20];
  public pageSize = this.pageSizes[0]; // Valor inicial
  public nPage = 1;
  public totalPages = 1;


  constructor(
    private transformEscapeRoomService: TransformEscapeRoomService
  ) { }

  ngOnInit(): void {
    this.getEscapeRooms();
  }

  public getEscapeRooms() {
    this.escapeRooms$ = this.transformEscapeRoomService.getTransformedEscapeRooms();
    console.log(this.escapeRooms$);
  }

}
