package com.example.rental.airbnb.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.rental.airbnb.Model.Bookings;
import com.example.rental.airbnb.Model.User;

import java.util.List;


public interface airbnbBookingDao extends JpaRepository<Bookings,Integer>{
  
    List<Bookings> findByUser(User user);
    
}
