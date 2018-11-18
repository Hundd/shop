import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], sortField?: string, ascending = false): any {
    const sortOrder = ascending ? 1 : -1;

    if (array && sortField) {
      return array.sort((a, b) =>
        a[sortField] > b[sortField] ? sortOrder : -sortOrder
      );
    }

    return array;
  }
}
