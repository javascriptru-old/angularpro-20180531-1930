import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[colory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  @HostBinding('style.color') mycolor: string;

  constructor() { 
    this.changeColor('red');
  }

  changeColor(color: string) {
    this.mycolor = color;
  }

}
