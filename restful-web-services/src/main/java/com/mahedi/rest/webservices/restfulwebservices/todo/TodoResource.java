package com.mahedi.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

/**
 * @author Mahedi Hassan
 * 2020-04-28
 */

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {

    @Autowired
    private TodoHardCodedService todoService;

    @GetMapping("/user/{username}/todos")
    public List<Todo> getAllTodo(@PathVariable String username){
        return todoService.findAllTodos();
    }

    @DeleteMapping("/user/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        Todo todo = todoService.deleteById(id);
        if (todo != null){
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
        return todoService.findById(id);
    }

    @PutMapping("/user/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
        Todo updatedTodo = todoService.saveTodo(todo);
        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }

    @PostMapping("/user/{username}/todos")
    public ResponseEntity<Void> updateTodo(@PathVariable String username, @RequestBody Todo todo){
        Todo createdTodo = todoService.saveTodo(todo);

        //Get current resource url
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }


}
