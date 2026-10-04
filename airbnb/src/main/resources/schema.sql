CREATE TABLE users ( id Integer PRIMARY KEY AUTO_INCREMENT,
     name  varchar(10),
     password  varchar2(100),
     dob varchar(10),
      mobile long);


CREATE TABLE houses (
    house_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    imgURL VARCHAR2(256),
    address  varchar(10),
    pincode varchar(10),
    details  varchar(10),
    rent varchar(10),
    user_id INTEGER,
     available Boolean,
    FOREIGN KEY (user_id) REFERENCES users(id)
   
);