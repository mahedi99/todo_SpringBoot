import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number, 
    public description: string,
    public done: boolean,
    public targetDate: Date){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string

  // todos = [
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(2, 'Learn to sing', false, new Date()),
  //   new Todo(3, 'Learn new language', false, new Date())
  //   // {id : 1,description : "Learn to dance"},
  //   // {id : 2,description : "Learn to sing"},
  //   // {id : 3,description : "Learn new language"},
  //   // {id : 4,description : "Learn to ride"}
  // ]
  // todo = {
  //   id : 1,
  //   description : 'Learn to Dance'
  // }

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  deleteTodo(id){
    this.todoService.deleteTodo('mahedi', id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of Todo ${id} successful`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id){
    this.router.navigate(['todo', id])
  }

  addTodo(){
    this.router.navigate(['todo', -1])
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('mahedi').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
