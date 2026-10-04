import { useEffect, useState } from "react";
import API from "../api/axiosConfig"; // Centralized Axios instance
import styles from "./Booking.module.css";
import { toast } from "react-toastify";

export default function BookingForm({ fetchHouses }) {
  const [hid, setHid] = useState("");
  const [userBookings, setUserBookings] = useState([]);

  // Get logged-in user ID from localStorage
  const uid = localStorage.getItem("userId");

  // 🔹 Create Booking
  const createBooking = async () => {
    if (!hid) {
      toast.error("Please enter House ID");
      return;
    }

    try {
      const { data } = await API.post(
        `/booking/book?hid=${hid}`
      );

      toast.success(`Booking successful ✅ Booking ID: ${data}`);
      setHid("");
      fetchHouses && fetchHouses();
      getUserBookings();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data || "Booking failed");
    }
  };

  // 🔹 Get User Bookings
  const getUserBookings = async () => {
    try {
      const { data } = await API.get("/booking/user_bookings");
      setUserBookings(data);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data || "Unable to fetch bookings");
    }
  };

  // Fetch bookings on component load
  useEffect(() => {
    getUserBookings();
  }, []);

  return (
    <div className={styles.cardStyle}>
      <h2>Create Booking</h2>

      <input
        className={styles.inputStyle}
        placeholder="House ID"
        value={hid}
        onChange={(e) => setHid(e.target.value)}
      />

      <button className={styles.btnStyle} onClick={createBooking}>
        Book
      </button>

      <h3>Your Bookings</h3>
      {userBookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className={styles.bookingList}>
          {userBookings.map((b) => (
            <li key={b.bookingId}>
              🏠 House ID: {b.houseId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}