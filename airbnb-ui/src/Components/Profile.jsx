import { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import "./Profile.css";
import Navbar from "./Navbar";
export default function Profile() {
  const [user, setUser] = useState(null);
  const [houses, setHouses] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchUserHouses();
    fetchUserBookings();
  }, []);

  const fetchUser = async () => {
    const { data } = await API.get("/user/profile");
    setUser(data);
  };

  const fetchUserHouses = async () => {
    const { data } = await API.get("/house/user_houses");
    setHouses(data);
  };

  const fetchUserBookings = async () => {
    const { data } = await API.get("/booking/user_bookings");
    setBookings(data);
  };

  if (!user) return <div className="loading">Loading...</div>;

  return (
    <>
    <div>
      <Navbar />

      <div className="profile-container">
        <div className="profile-card">
          <h2>Your Profile</h2>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Mobile:</b> {user.mobile}</p>
          <p><b>Date of Birth:</b> {user.dob}</p>
        </div>

        <div className="profile-card">
          <h2>Your Houses</h2>
          <div className="houses-grid">
            {houses.length === 0 ? (
              <p>No houses added yet.</p>
            ) : (
              houses.map((h) => (
                <div key={h.houseId} className="house-card">
                  <img src={h.imgURL} alt="House" />
                  <p><b>Address:</b> {h.address}</p>
                  <p><b>Pincode:</b> {h.pincode}</p>
                  <p><b>Rent:</b> ₹{h.rent}</p>
                  <p><b>Available:</b> {h.available ? "Yes" : "No"}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="profile-card">
          <h2>Your Bookings</h2>

          {!Array.isArray(bookings) || bookings.length === 0 ? (
            <p>No bookings yet.</p>
          ) : (
            <div className="houses-grid">
              {bookings.map((b) => (
                <div key={b.bid} className="house-card">
                  <img src={b.houses?.imgURL} alt="Booked House" />
                  <p><b>Address:</b> {b.houses?.address}</p>
                  <p><b>Rent:</b> ₹{b.houses?.rent}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}