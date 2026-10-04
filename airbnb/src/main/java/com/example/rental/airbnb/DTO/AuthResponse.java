package com.example.rental.airbnb.DTO;

public class AuthResponse {

    private String token;
    private Integer id;
    private String name;

    public AuthResponse(String token, Integer id, String name) {
        this.token = token;
        this.id = id;
        this.name = name;
    }

    public String getToken() {
        return token;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}