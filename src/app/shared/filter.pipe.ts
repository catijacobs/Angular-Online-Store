import { Pipe, PipeTransform } from '@angular/core';
import { resourceLimits } from 'worker_threads';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString: string, propName: string): any[] {
    const result:any=[];
    if(!value  || filterString==='' || propName ===''){
    return value;
  }
  value.forEach((a:any)=>{
    if(a[propName].trim().toLowerCase().include(filterString.toLowerCase())){
      result.push(a);
    }
  });
  return result;
  }
}
