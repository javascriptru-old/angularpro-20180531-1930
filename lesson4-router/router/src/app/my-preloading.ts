import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";

export class MyPreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.data && route.data['nopreload']){
       return of(false);
    }
    return of(true).pipe( delay(3000), switchMap(_ => load()) );
  };

}