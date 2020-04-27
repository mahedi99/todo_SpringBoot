import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

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


  constructor(private router : Router, private hardcodedAuthService : HardcodedAuthService ) { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username);
    // if(this.username === "mahedi" && this.password == "p"){  
    if(this.hardcodedAuthService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
    }
    else{
      this.invalidLogin = true
    }
  }

}