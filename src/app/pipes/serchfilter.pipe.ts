import { Pipe, PipeTransform } from '@angular/core';  
@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searchValue): any {
    

    
    if (!searchValue) return value;
    return value.filter((v) => 
    v.name.indexOf(searchValue.toLowerCase()) > -1 || 
    v.description.indexOf(searchValue.toLowerCase()) > -1)
  }

}