import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


export class HelloWorldBean{
  constructor(public message: string){

  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHellloWprldBeanService(){
    let basicAuthHearerStr = this.createBasicAuthHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHearerStr
    })
     return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean`, {headers});
  }

  executeHellloWprldBeanServiceWithPath(name){
    let basicAuthHearerStr = this.createBasicAuthHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHearerStr
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers});
  }

  createBasicAuthHeader(){
    let username='user'
    let password='password'
    let basicAuthHearerStr = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHearerStr;
  }
}
