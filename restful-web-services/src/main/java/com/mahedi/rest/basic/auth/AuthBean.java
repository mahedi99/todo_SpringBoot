package com.mahedi.rest.basic.auth;

/**
 * @author Mahedi Hassan
 * 2020-04-28
 */

public class AuthBean {
    private String message;

    public AuthBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

//    @Override
//    public String toString() {
//        return "HelloWorldBean{" +
//                "massage='" + massage + '\'' +
//                '}';
//    }
}
