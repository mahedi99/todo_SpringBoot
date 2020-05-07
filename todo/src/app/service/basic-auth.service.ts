import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const TOKEN = "token"
export const AUTHENTICATED_USER = "authenticatedUser"

export class AuthBean {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http: HttpClient) { }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
  }

  executeAuthService(username, password){
    let basicAuthHearerStr = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHearerStr
    })
    return this.http.get<AuthBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            console.log(data)
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHearerStr);
            return data;
          }
        )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
    
  }

  getToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('token');
    }
  }
}
