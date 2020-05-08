package com.mahedi.rest.webservices.restfulwebservices.jwt.resource;

/**
 * @author Mahedi Hassan
 * 2020-05-08
 */
public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}
