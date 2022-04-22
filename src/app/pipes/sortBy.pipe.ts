import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any, sortMode?: any): any {
    switch(sortMode){
      case 'alphabetical':
        return value.sort((a:any, b:any) => a.title > b.title ? 1 : -1);
      break;
      case 'release':
        return value.sort((a:any, b:any) => a.release > b.release ? 1 : -1);
      break;
      case 'creation':
        return value.sort((a:any, b:any) => a.creationDate > b.creationDate ? 1 : -1);
      break;
    }
    return value.sort();
  }

}
