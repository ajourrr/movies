import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    return value.filter((item: any) => item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
