import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TransformEscapeRoomService } from 'src/app/core/services/transform-escape-room.service';
import { EscapeRoomI } from 'src/app/core/services/models/escape-rooms.models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private escapeRoomId?: string;
  public escapeRoom$?: Observable<EscapeRoomI>;

  constructor(
    private route: ActivatedRoute,
    private transformEscapeRoomService: TransformEscapeRoomService
  ) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      // Hay que poner "!" porque  "?" proteje de "undefined" pero params.get() puede devolver null"
      // Al poner "!" se asegura al compilador que siempre habrá algún dato ahí
      this.escapeRoomId = params.get('roomId')!;
    });

    this.escapeRoom$ = this.transformEscapeRoomService.getTransformedEscapeRoomId(this.escapeRoomId!);
  }

}
