import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Todo } from 'src/app/list-todos/list-todos.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private _http:HttpClient) { }


  callAllToDos(username:String):Observable<Todo[]>
  {
   return  this._http.get<Todo[]>(`http://localhost:9090/users/${username}/todos`);

  }

  DeleteToDoById(id:number,username:String)
  {
   return  this._http.delete(`http://localhost:9090/users/${username}/todos/${id}`);

  }
  fetchToDoById(username:String,id:number)
  {
    console.log(username,id);
   return  this._http.get<Todo>(`http://localhost:9090/users/${username}/todos/${id}`);
  }

  updatetoDoById(username:String,id:number,todo:Todo)
  {
    console.log(username,id);
   return  this._http.put(`http://localhost:9090/users/${username}/todos/${id}`,todo);
  }

  createNewone(username:String,todo:Todo)
  {
    
   return  this._http.post(`http://localhost:9090/users/${username}/todos`,todo);
  }


  createBasicAuthenticationHttpHeader()
  {
    let username='krishna'
    let password='1234'
    let basicAuthHeaderString='Basic '+window.btoa(username+':'+password);
    return basicAuthHeaderString;
  }
}
