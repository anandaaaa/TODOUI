import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoserviceService } from '../service/data/todoservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  Id:any=0;
  todo!: Todo;
  constructor(private _activatedroute:ActivatedRoute,private service:TodoserviceService,private _route:Router) { }

  ngOnInit(): void {
    this.Id=this._activatedroute.snapshot.paramMap.get('id');
    console.log(this.Id);
    this.todo=new Todo(this.Id,'',false,new Date());
    if(this.Id!=-1)
    {
      this.service.fetchToDoById('anand',this.Id).subscribe(data=>this.todo=data);
    }
    
    console.log(this.todo)
  }
  updatethedata()
  {
    if(this.Id==-1)
    {
      this.createTheData();
    }
    else{
      this.service.updatetoDoById('anand',this.Id,this.todo).subscribe(data=>{console.log("data updated")
      this._route.navigate(["todos"]);}
      )
    }
  }

  createTheData()
  {
    this.service.createNewone('anand',this.todo).subscribe(data=>{console.log("data updated")
    this._route.navigate(["todos"]);
  }
    )

  }

}
