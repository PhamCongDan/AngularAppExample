import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class JwtInterceptor implements HttpInterceptor {
  constructor(){

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      // success
      if (event instanceof HttpResponse) {

      }
    }, (err: any) => {
      // error
      if (err instanceof HttpErrorResponse) {
        switch (err.status) {
          case 401: break;
          default: break;

        }
      }
    }))
  }
}