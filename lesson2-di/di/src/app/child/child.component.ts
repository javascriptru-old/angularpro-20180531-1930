import { Component, OnInit } from '@angular/core';
import { Log2Service } from '../log2.service';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor(private log:Log2Service) {
    debugger
  }

  ngOnInit() {
  }

}
