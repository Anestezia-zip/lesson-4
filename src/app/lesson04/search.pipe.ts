import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './lesson04.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: Person[], field: string): Person[] {
    if (!values) return [];
    if (!field) return values;
    return values.filter( value => 
      value.firstName.toLowerCase().includes(field.toLowerCase()) || 
      value.lastName.toLowerCase().includes(field.toLowerCase()) || 
      value.number.includes(field) )
  }

}
