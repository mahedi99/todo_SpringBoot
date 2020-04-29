package com.mahedi.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author Mahedi Hassan
 * 2020-04-28
 */

@Service
public class TodoHardCodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "mahedi", "Learn to dance", new Date(), false));
        todos.add(new Todo(++idCounter, "mahedi", "Learn to sing", new Date(), false));
        todos.add(new Todo(++idCounter, "mahedi", "Visit Europe", new Date(), false));
    }

    public List<Todo> findAllTodos(){
        return todos;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if (todo != null) {
            return todos.remove(todo) ? todo : null;
        }
        return null;
    }

    public Todo findById(long id) {
        for(Todo todo : todos){
            if (todo.getId() == id){
                return todo;
            }
        }
        return null;
    }
}
