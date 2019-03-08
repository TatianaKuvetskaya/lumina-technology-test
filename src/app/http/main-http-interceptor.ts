import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class MainHttpInterceptor implements HttpInterceptor {

  private readonly url = 'https://lumina-backend.herokuapp.com/nodes';

  intercept(reqBasic: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let req;

    req = reqBasic.clone({url: this.url + reqBasic.url});

    return next.handle(req)
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }
}
