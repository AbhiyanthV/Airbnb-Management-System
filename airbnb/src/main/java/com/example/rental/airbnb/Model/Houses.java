package com.example.rental.airbnb.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Houses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer houseId;
    private String imgURL;
    private String address;
    @Column(nullable=false)
    private Long pincode;
    private String details;
    @Column(nullable=false)
    private Double rent;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;
    private boolean available;
    @OneToMany(mappedBy = "houses")
@com.fasterxml.jackson.annotation.JsonIgnore
    private List<Bookings> bookings;
}
