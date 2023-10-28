import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, percentageOf:number, precission:number): string {
    return ((value/percentageOf) *100).toFixed(precission)+'%';
  }

}
