import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username='krishna'
    let password='1234'
    let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
    request=request.clone({
      setHeaders:{
        Authorization:basicAuthHeaderString
      }
    }) ;
 
    return next.handle(request)
  }

}
