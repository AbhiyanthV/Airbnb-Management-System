package com.example.rental.airbnb.DTO;

public record addHouseReq( String imgURL,
     String address,
     Long pincode,
     String details,
     Double rent,
     Integer user_id) {

}
