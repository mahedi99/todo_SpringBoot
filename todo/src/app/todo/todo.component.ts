import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private todoService: TodoDataService, private router: Router) { }

  id: number
  todo: Todo

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id != -1){
      this.todoService.retrieveTodo('mahedi', this.id).subscribe(
        response => this.todo = response
      );
    }
  }

  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo('mahedi', this.todo).subscribe(
        response => this.router.navigate(['todos'])
      );
    }
    else{
      this.todoService.updateTodo('mahedi', this.id, this.todo).subscribe(
        response => this.router.navigate(['todos'])
      );
    }
  }

} 
