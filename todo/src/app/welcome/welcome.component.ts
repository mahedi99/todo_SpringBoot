import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome Message'
  name = ''
  welcomeMessageFromService: string

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'] //name is received here from url path parameter
  }

  getWelcomeMessage(){
    this.service.executeHellloWprldBeanServiceWithPath(this.name).subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    )
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
  }
  
  handleErrorResponse(error){
    this.welcomeMessageFromService  = error.error.message
  }
}
