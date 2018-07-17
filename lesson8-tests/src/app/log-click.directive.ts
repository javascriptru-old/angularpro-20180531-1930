import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[logClick]'
})
export class LogClickDirective {

  private _counter = 0;

  @Output() changes = new EventEmitter();

  @HostListener('click') onclick() {
    this._counter++;
    this.changes.emit(this._counter);
  }
}
