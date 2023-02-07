import { Pipe, PipeTransform } from '@angular/core';
import { EscapeRoomI } from 'src/app/core/services/models/escape-rooms.models';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(list: EscapeRoomI[], pageSize: number, nPage: number): EscapeRoomI[] {

    console.log(nPage);

    const initialElement: number = pageSize*(nPage-1)
    const lastElement: number = initialElement + pageSize;

    return list.slice(initialElement , lastElement)
  }

}
