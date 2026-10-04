package com.example.rental.airbnb.Contoller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.example.rental.airbnb.DTO.AuthResponse;
import com.example.rental.airbnb.DTO.userReq;
import com.example.rental.airbnb.Model.User;
import com.example.rental.airbnb.Service.airbnbUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class airbnbUserContoller {

    @Autowired
    private airbnbUserService service;

    // Register
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            Integer id = service.register(user);
            return new ResponseEntity<>(id, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body("User not created: " + e.getMessage());
        }
    }

    // Login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody userReq req) {
        try {
           
            AuthResponse response = service.login(req);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid Credentials");
        }
    }

    // Get All Users
    @GetMapping("/users")
    public ResponseEntity<?> getUsers() {
        return ResponseEntity.ok(service.getUsers());
    }

    // Get Profile
  @GetMapping("/profile")
public ResponseEntity<?> getProfile(Authentication authentication) {
    String username = authentication.getName();
    System.out.println("username"+username);
    return ResponseEntity.ok(service.getUserByName(username));
}
}