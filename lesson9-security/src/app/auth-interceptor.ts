import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, retryWhen, delay } from 'rxjs/operators';


export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('xxx', '555')
    });
    return next.handle(authReq).pipe(
      // retry(2),
      // delay(3000),
      // retryWhen(retryFunctionFactory({
      //   ttl: 5,
      //   delay: 2000,
      //   errorHandle: true
      // })),
      catchError((error: HttpErrorResponse) => {
        // if(error.status === 401)
        // if(error.status === 403)

        return throwError(error);
      })
    );
  };
}









// tslint:disable-next-line:typedef
export const retryFunctionFactory = (
  retryFnConfig: {
    maxTTL: number,
    delayMs: number,
    errorsToHandle: number[]
  }
) => {

  return (error$: Observable<HttpErrorResponse>) => {
    let ttl: number = retryFnConfig.maxTTL;

    return error$
      .pipe(
        mergeMap((error: HttpErrorResponse) => {
          if (ttl && retryFnConfig.errorsToHandle.indexOf(error.status) !== -1) {
            ttl--;

            return of(null)
              .pipe(
                delay(retryFnConfig.delayMs)
              );
          }

          return observableThrowError(error);
        })
      );
    };
};