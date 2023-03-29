import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './lesson04.component';

@Pipe({
  name: 'sort',
  pure: false
})

export class SortPipe implements PipeTransform {

  transform(values: Person[], sort: string): Person[] {
    if (!values) return [];
    if (!sort) return values;
    if(sort === 'asc') {
      return values.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : ((a.firstName.toLowerCase() < b.firstName.toLowerCase()) ? -1 : 0) )
    }
      return values.sort((a, b) => (a.firstName.toLowerCase() < b.firstName.toLowerCase()) ? 1 : ((a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? -1 : 0))
    }
  
}