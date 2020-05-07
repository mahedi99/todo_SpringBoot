import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username='user'
    // let password='password'
    // let basicAuthHearerStr = 'Basic ' + window.btoa(username + ':' + password);

    
    let basicAuthHearerString = this.basicAuthService.getToken();
    let username = this.basicAuthService.getAuthenticatedUser();


    if(basicAuthHearerString && username){
      req = req.clone({
        setHeaders : {
          Authorization : basicAuthHearerString
        }
      })
    }
    return next.handle(req)
  }
}
