import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [HelloComponent],
  imports: [ BrowserModule ],
  entryComponents: [ HelloComponent ]
})
export class AppModule {

  constructor(private injector: Injector) {
    const helloElement = createCustomElement(HelloComponent, { injector });
    customElements.define('custom-hello', helloElement);
  }

  ngDoBootstrap() {}
}
