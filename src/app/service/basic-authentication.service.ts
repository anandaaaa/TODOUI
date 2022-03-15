import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

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

basicAuthwelcomeServicemethod(username:String,password:String):Observable<AuthenticationBean>
{
  
    let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
 
    let headers= new HttpHeaders({Authorization:basicAuthHeaderString})


  
  return this._httpclient.get<AuthenticationBean>(`http://localhost:9090/basicauth`,{headers});

}


}

export class AuthenticationBean{
constructor(public message:string)
{

}
}