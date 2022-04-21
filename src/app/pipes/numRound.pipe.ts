import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numRound'
})
export class NumRoundPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value > 999999){
      return (value / 1000000).toFixed(1) + 'M$';
    } else if(value > 999) {
      return (value / 1000).toFixed(1) + 'K$'
    }
    return value
  }

}
