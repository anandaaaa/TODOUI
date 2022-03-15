import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="Anand";
  password=""
  message=false;
  constructor(private _router:Router,private _authenticationservice:HardCodedAuthenticationService) { }

  ngOnInit(): void {
  }

  checkAuthenticate()
  {
    this.message=this._authenticationservice.checkAuthentication(this.username,this.password);
      }
  }
 


