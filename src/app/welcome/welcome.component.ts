import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message:any="";
  welomemessage:any="hi";
  constructor(private _activatedroute:ActivatedRoute,private _service:HardCodedAuthenticationService) { }


  ngOnInit(): void {
   this.message=this._activatedroute.snapshot.paramMap.get('name');
  }


  callwelcome()
  {
    this._service.welcomeServicemethod('anand').subscribe(data=>{this.welomemessage=data,console.log("welcome to world"+data)})
  }

  
  
}
