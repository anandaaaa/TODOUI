import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoserviceService } from '../service/data/todoservice.service';

export class Todo{
  constructor(public id:number,public description:string,public iscompleted:boolean,public targetdate:Date)
  {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor(private _todoservice:TodoserviceService,private route:Router) { }
  Todos: Array<Todo>=[];
  message:string=''

// =[
//   new Todo(1,"complete course",false,new Date()),
//   new Todo(2,"assignment",false,new Date()),
//   new Todo(3,"shopping",false,new Date()),

// ]

  ngOnInit(): void {
    this.fetchAllTodo()
  }

  fetchAllTodo(){
    this._todoservice.callAllToDos('anand').subscribe(data=>this.Todos=data)

  }

  DeleteByID(id:number)
  {
    this._todoservice.DeleteToDoById(id,'Anand').subscribe(data=>{this.message="Data deleted successfully";this.route.navigate(["/todos"])})
    this.fetchAllTodo();
    

      
    
  }

  updateById(id:number)
  {
    this.route.navigate(["/todo",id]);
  }

  AddNew(){
    this.route.navigate(['/todo',-1]);
  }
  
}
