import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
   

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/user/${username}/todos`);
  }
  deleteTodo(username, id) {
    return this.http.delete(`${API_URL}/user/${username}/todos/${id}`)
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`${API_URL}/user/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(`${API_URL}/user/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo){
    return this.http.post(`${API_URL}/user/${username}/todos`, todo)
  }

  // createBasicAuthHeader(){
  //   let username='user'
  //   let password='password'
  //   let basicAuthHearerStr = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHearerStr;
  // }
  
}
