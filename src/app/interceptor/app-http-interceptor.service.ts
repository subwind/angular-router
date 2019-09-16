import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable()
export class AppHttpInterceptorService implements HttpInterceptor {
  //https://wellwind.idv.tw/blog/2019/01/06/mastering-angular-31-how-to-create-new-http-client-and-ignore-http-interceptors/
  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req);
  }

}