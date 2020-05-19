package com.mahedi.rest.webservices.restfulwebservices.todo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

/**
 * @author Mahedi Hassan
 * 2020-04-28
 */

@Entity
@Getter @Setter @NoArgsConstructor
@AllArgsConstructor
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;
}
