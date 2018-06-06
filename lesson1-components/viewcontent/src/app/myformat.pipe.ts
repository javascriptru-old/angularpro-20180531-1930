import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myformat',
  pure: false
})
export class MyformatPipe implements PipeTransform {

  constructor() {

  }

  transform(value: any, args?: any): any {
    console.log('transform');
    return null;
  }

}
