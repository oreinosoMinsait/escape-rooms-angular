import { Pipe, PipeTransform } from '@angular/core';
import { EscapeRoomI } from 'src/app/core/services/models/escape-rooms.models';

@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {

  transform(list: EscapeRoomI[], words: string): EscapeRoomI[] {

    const lctWords: string = words.toLowerCase().trim(); // lct = lowerCase trimmed
    const nameList: string[] = list.map((room) => room.name);
    const filteredList: EscapeRoomI[] = [];

    nameList.forEach((el, index) => {
      if(el.toLocaleLowerCase().includes(lctWords)) {
        filteredList.push(list[index]);
      }
    })

    return filteredList;
  }

}
