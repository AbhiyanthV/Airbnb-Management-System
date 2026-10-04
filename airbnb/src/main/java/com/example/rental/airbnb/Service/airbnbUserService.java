package com.example.rental.airbnb.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.rental.airbnb.Config.JwtUtil;
import com.example.rental.airbnb.DTO.AuthResponse;
import com.example.rental.airbnb.DTO.userReq;
import com.example.rental.airbnb.Model.User;
import com.example.rental.airbnb.Repository.airbnbUserDao;

@Service
public class airbnbUserService {

    @Autowired
    private airbnbUserDao repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // Register User
    public Integer register(User u) {
        u.setPassword(passwordEncoder.encode(u.getPassword()));
        User user = repo.save(u);
        return user.getId();
    }

    // Get All Users
    public List<User> getUsers() {
        return repo.findAll();
    }

    // Login User and Generate JWT
    public AuthResponse login(userReq userReq) {
         System.out.println(userReq.name()+"olp"+userReq.password());
        User user = repo.findByName(userReq.name());
       System.out.println(user);
        if (user == null ||
            !passwordEncoder.matches(userReq.password(), user.getPassword())) {
            throw new RuntimeException("Invalid Credentials");
        }

        String token = jwtUtil.generateToken(user.getName());

        return new AuthResponse(
                token,
                user.getId(),
                user.getName()
        );
    }

    // Get User Details
  public User getUserByName(String name) {
    return repo.findByName(name);
}
}