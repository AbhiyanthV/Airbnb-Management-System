package com.example.rental.airbnb.Contoller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.example.rental.airbnb.Service.airbnbBookingService;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "http://localhost:3000")
public class airBookingController {

    @Autowired
    private airbnbBookingService service;

    // 🔹 Create Booking
    @PostMapping("/book")
    public ResponseEntity<?> bookHouse(
            @RequestParam Integer hid,
            Authentication authentication) {

        String username = authentication.getName();
        return ResponseEntity.ok(service.bookHouse(username, hid));
    }

    // 🔹 Get User Bookings
    @GetMapping("/user_bookings")
    public ResponseEntity<?> getUserBookings(Authentication authentication) {
        String username = authentication.getName();
        return ResponseEntity.ok(service.getUserBookings(username));
    }
}