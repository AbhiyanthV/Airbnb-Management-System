package com.example.rental.airbnb.Model;

import java.util.List;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="Users")
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(unique = true)
    private String password;
    private String dob;
    @Column(unique = true)
    private long mobile;
    @OneToMany(mappedBy="user")
    private List<Houses> houses;
     @OneToMany(mappedBy="user")
    private List<Bookings> bookings;
    
    

}
