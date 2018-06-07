import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  template: `
    {{log.randomNumber}}

    <app-nested>

         <app-child></app-child>

    </app-nested>

  `,
  providers: []
})
export class AppComponent {
  title = 'app';

  constructor(public log:LogService){

  }
}
