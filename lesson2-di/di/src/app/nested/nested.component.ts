import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';
import { Log2Service } from '../log2.service';
import { bloomFindPossibleInjector } from '@angular/core/src/render3/di';
import { BASE_URL_TOKEN } from '../app.module';

@Component({
  selector: 'app-nested',
  template: `
    <p>
      nested works! and {{log.randomNumber}}
    </p>

    <ng-content></ng-content>
  `,
 providers: [ LogService ],
 viewProviders: [ Log2Service ]
})
export class NestedComponent implements OnInit {

  constructor(public log:LogService,
  @Inject(BASE_URL_TOKEN) baseUrl){

  }

  ngOnInit() {
  }

}
