import { Component, Input } from '@angular/core';
import { EscapeRoomI } from 'src/app/core/services/models/escape-rooms.models';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  @Input() roomSon?: EscapeRoomI;

}
