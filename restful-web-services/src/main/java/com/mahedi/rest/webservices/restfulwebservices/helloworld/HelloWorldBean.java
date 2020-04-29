package com.mahedi.rest.webservices.restfulwebservices.helloworld;

/**
 * @author Mahedi Hassan
 * 2020-04-28
 */

public class HelloWorldBean {
    private String message;

    public HelloWorldBean(String message) {
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
