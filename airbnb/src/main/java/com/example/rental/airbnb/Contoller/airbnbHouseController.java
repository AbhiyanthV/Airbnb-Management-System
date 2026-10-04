package com.example.rental.airbnb.Contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rental.airbnb.DTO.addHouseReq;
import com.example.rental.airbnb.Service.airbnbHouseService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("house")
@CrossOrigin(origins = "http://localhost:3000")
public class airbnbHouseController {

     @Autowired
    private airbnbHouseService service;

    
    @GetMapping("houses")
    public ResponseEntity<?> getHouse(Authentication authentication)
    {
       try{
           return ResponseEntity.ok(service.getHouses(authentication.getName()));
       } 
       catch(Exception e)
       {
         return ResponseEntity.ofNullable("No data foud");
       }
    }

    @GetMapping("user_houses")
    public ResponseEntity<?> getUserHouse(Authentication authentication) {
        return ResponseEntity.ok(service.getHouseReqs(authentication.getName()));
    }

    @PostMapping("add")
    public ResponseEntity<?> addHouse(@RequestBody addHouseReq house,Authentication authentication) {
        try{
            System.out.println(house);
           return new ResponseEntity<>(service.addHouse(house,authentication.getName()),HttpStatus.CREATED);
       } 
       catch(Exception e)
       {
         return ResponseEntity.badRequest().body(e.getMessage());
       }
    }
    }
    

