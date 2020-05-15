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
    private TodoJpaRepository todoJpaRepository;


    @GetMapping("/user/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable Long id){
        return todoJpaRepository.findById(id).get();
    }

    @GetMapping("/user/{username}/todos")
    public List<Todo> getAllTodo(@PathVariable String username){
        return todoJpaRepository.findByUserName(username);
    }

    @DeleteMapping("/user/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        todoJpaRepository.deleteById(id);
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/user/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
//        Todo updatedTodo = todoService.saveTodo(todo);
        Todo updatedTodo = todoJpaRepository.save(todo);
        return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
    }

    @PostMapping("/user/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo){
//        Todo createdTodo = todoService.saveTodo(todo);
        Todo createdTodo = todoJpaRepository.save(todo);
        //Get current resource url
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }


}
