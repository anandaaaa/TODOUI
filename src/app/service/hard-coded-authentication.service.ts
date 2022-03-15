import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor(private _router:Router,private _httpclient:HttpClient) { }

  checkAuthentication(username:string,password:string):boolean
  {
    //console.log("before"+this.isuserlogedIn())
    if(username=="krishna" && password=="1234"){
      sessionStorage.setItem("authenticationname",username);
      this._router.navigate(['/welcome',username]);
     // console.log("after"+this.isuserlogedIn())

      return false;
    }
    else{
      return true;
    }
  }


isuserlogedIn()
{
  let user=sessionStorage.getItem("authenticationname");
  return !(user===null);
}

logout()
{
  sessionStorage.removeItem("authenticationname");
}

welcomeServicemethod(username:String):Observable<any>
{
  let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
  let headers= new HttpHeaders({Authorization:basicAuthHeaderString})
  
  return this._httpclient.get<any>(`http://localhost:9090/users/${username}/welcome`,{headers});

}

createBasicAuthenticationHttpHeader()
  {
    let username='krishna'
    let password='1234'
    let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
    return basicAuthHeaderString;
  }

}
