package com.example.rental.airbnb.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.rental.airbnb.Model.Bookings;
import com.example.rental.airbnb.Model.Houses;
import com.example.rental.airbnb.Model.User;

import com.example.rental.airbnb.Repository.airbnbBookingDao;
import com.example.rental.airbnb.Repository.airbnbHouseDao;
import com.example.rental.airbnb.Repository.airbnbUserDao;

@Service
public class airbnbBookingService {

    @Autowired
    private airbnbBookingDao bookingRepo;

    @Autowired
    private airbnbHouseDao houseRepo;

    @Autowired
    private airbnbUserDao userRepo;

    // 🔹 Create Booking
    public Integer bookHouse(String username, Integer houseId) {

        // 1. Get User from DB using username (from JWT)
        User user = userRepo.findByName(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        // 2. Get House
        Houses house = houseRepo.findById(houseId)
                .orElseThrow(() -> new RuntimeException("House not found"));

        // 3. Check availability
        if (!house.isAvailable()) {
            throw new RuntimeException("House already booked");
        }

        // 4. Create Booking
        Bookings booking = new Bookings();
        booking.setUser(user);
        booking.setHouses(house);

        // 5. Mark house as booked
        house.setAvailable(false);
        houseRepo.save(house);

        // 6. Save booking
        Bookings saved = bookingRepo.save(booking);

        return saved.getBid();
    }

    // 🔹 Get bookings of logged-in user
    public List<Bookings> getUserBookings(String username) {

        User user = userRepo.findByName(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return bookingRepo.findByUser(user);
    }
}