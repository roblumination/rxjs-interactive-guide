import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOperator',
})
export class FilterOperatorPipe implements PipeTransform {
  transform(operators: string[], filterString: string): string[] {
    if (!operators.length) return [];
    return operators.filter((operator) => operator.includes(filterString));
  }
}
