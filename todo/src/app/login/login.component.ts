import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'mahedi'
  password = ''
  errorMessage = "Invalid Credentials"
  invalidLogin = false


  constructor(private router : Router, private basicAuthService : BasicAuthService ) { }

  ngOnInit(): void {
  }

  // handleLogin(){
  //   console.log(this.username);
  //   // if(this.username === "mahedi" && this.password == "p"){  
  //   if(this.basicAuthService.authenticate(this.username, this.password)){
  //     this.router.navigate(['welcome', this.username])
  //   }
  //   else{
  //     this.invalidLogin = true
  //   }
  // }

  handleBasicAuthLogin(){
    console.log(this.username);
    // if(this.username === "mahedi" && this.password == "p"){  
    this.basicAuthService.executeAuthService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

}