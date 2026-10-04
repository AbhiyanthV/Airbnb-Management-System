package com.example.rental.airbnb.Service;


import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rental.airbnb.DTO.addHouseReq;
import com.example.rental.airbnb.Model.Houses;
import com.example.rental.airbnb.Model.User;
import com.example.rental.airbnb.Repository.airbnbHouseDao;
import com.example.rental.airbnb.Repository.airbnbUserDao;


@Service
public class airbnbHouseService {
    
    @Autowired
    private airbnbHouseDao hrepo;
    @Autowired
    private airbnbUserDao repo;
   

    public List<Houses> getHouses(String name)
    {
         User u =repo.findByName(name);
            
        return hrepo.findByAvailableTrueAndUser_IdNot(u.getId());
    }
    
    public List<Houses> getHouseReqs(String name)
    {
            List<String> url=new ArrayList<>();
            User u =repo.findByName(name);
            List <Houses> houses=hrepo.findByUser(u);
            for(Houses h:houses)
            {
                url.add(h.getImgURL());
            }
        return houses ;
    }

    public Integer addHouse(addHouseReq dto,String name) {
    User user  = repo.findByName(name);
    // User user = repo.findById(dto.user_id())
    //         .orElseThrow(() -> new RuntimeException("User not found"));

    Houses house = new Houses();

    house.setImgURL(dto.imgURL());
    house.setAddress(dto.address());
    house.setPincode(dto.pincode());
    house.setDetails(dto.details());
    house.setRent(dto.rent());
    house.setAvailable(true);
    house.setUser(user);

    
   
    Houses h= hrepo.save(house);
    
    if(h!=null)
    {
        return h.getHouseId();
    }

   else
    {
        throw new RuntimeException("House not Created");
    }

}

}

