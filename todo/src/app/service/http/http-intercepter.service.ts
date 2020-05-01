import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let username='user'
    let password='password'
    let basicAuthHearerStr = 'Basic ' + window.btoa(username + ':' + password);

    req = req.clone({
      setHeaders : {
        Authorization : basicAuthHearerStr
      }
    })
    return next.handle(req)
  }
}
