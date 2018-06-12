import { Component, EventEmitter, OnInit, ViewEncapsulation, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'custom-hello',
  template: `
    <p (click)="onClick()">
      {{greetings}}, {{name}}!
    </p>
    <ng-content></ng-content>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  greetings = 'Привет';

  constructor() { }

  onClick() {
    this.clicked.emit(this.name);
  }

  ngOnInit() {
  }

  ngOnChanges() {
     const options = ['Привет', 'Hi', 'Hello', 'Bonjour', 'Hola'];
     this.greetings = options[Math.floor(Math.random() * options.length)];
  }

}
