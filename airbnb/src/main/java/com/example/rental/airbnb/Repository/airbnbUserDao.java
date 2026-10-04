package com.example.rental.airbnb.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.rental.airbnb.Model.User;

public interface airbnbUserDao extends JpaRepository<User,Integer> {



    User findByName(String name);
}
