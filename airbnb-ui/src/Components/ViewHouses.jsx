import { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import Navbar from "./Navbar";
import styles from "./House.module.css";
import { toast } from "react-toastify";

export default function ViewHouses({ showNavbar = true , showtitle=true}) {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const { data } = await API.get("/house/houses");
      setHouses(data);
    } catch (err) {
      toast.error("Failed to fetch houses");
    }
  };

  const bookHouse = async (hid) => {
    try {
      const { data } = await API.post(`/booking/book?hid=${hid}`);
      toast.success(`Booking successful ✅ ID: ${data}`);
      fetchHouses();
    } catch (err) {
      toast.error(err.response?.data || "Booking failed");
    }
  };

  return (
    <div>
    {showNavbar && <Navbar />}
     {showtitle && ( <h2 style={{ textAlign: "center" }}>🏠 Available Houses</h2>)}

      <div className={styles.grid}>
        {houses.map((h) => (
          <div key={h.houseId} className={styles.card}>
            <img src={h.imgURL} alt="house" className={styles.image} />
            <p><b>Pincode:</b> {h.pincode}</p>
            <p><b>Details:</b> {h.details}</p>
            <p><b>Rent:</b> ₹{h.rent}</p>
            <p>
              <b>Status:</b>{" "}
              <span className={h.available ? styles.available : styles.notAvailable}>
                {h.available ? "Available" : "Booked"}
              </span>
            </p>

            {h.available && (
              <button
                className={styles.button}
                onClick={() => bookHouse(h.houseId)}
              >
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}