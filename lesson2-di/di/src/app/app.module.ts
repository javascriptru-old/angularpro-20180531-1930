import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken, ReflectiveInjector } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LogService } from './log.service';
import { AdminService } from './admin.service';
import { NestedComponent } from './nested/nested.component';
import { ChildComponent } from './child/child.component';

export const BASE_URL_TOKEN = new InjectionToken<string>('BASE_URL_TOKEN');

const injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([UserService]);
const childInjector = injector.resolveAndCreateChild([UserService]);
// childInjector.get(UserService) !== injector.get(UserService)

/*
@Component
@Directive
@Pipe
@Injectable

StaticInjector

Platform, Compiler, NgZone - ReflectiveInejctor => StaticInjector
Module, Component - not ReflectiveInejctor


*/


@NgModule({
  declarations: [
    AppComponent,
    NestedComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LogService, useClass: LogService, deps: []}
    // AdminService,
    // //{ provide: UserService, useClass: UserService },
    // { provide: BASE_URL_TOKEN, useValue: 'api.base.com'},
    // { provide: UserService, useFactory: function(logs) {
    //   return new UserService();
    // }, deps: [LogService]},
    // { provide: UserService, useExisting: AdminService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
