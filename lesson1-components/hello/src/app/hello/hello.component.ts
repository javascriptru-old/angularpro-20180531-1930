import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-hello',
  template: `
    <p>
      hello works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
