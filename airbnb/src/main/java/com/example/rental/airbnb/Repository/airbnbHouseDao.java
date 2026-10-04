package com.example.rental.airbnb.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.rental.airbnb.Model.Houses;
import com.example.rental.airbnb.Model.User;

public interface airbnbHouseDao extends JpaRepository<Houses,Integer> {
    List<Houses> findByUserId(Integer id);
    List<Houses> findByAvailableTrueAndUser_IdNot(Integer id);
    List<Houses> findByUser(User u);
}
