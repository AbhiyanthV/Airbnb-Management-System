// Navbar.jsx
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div style={navStyle}>
      <button style={btnStyle} onClick={() => navigate("/home")}>🏠 Home</button>
      <button style={btnStyle} onClick={() => navigate("/add-house")}>➕ Add</button>
      <button style={btnStyle} onClick={() => navigate("/view-houses")}>👀 View</button>
      <button style={btnStyle} onClick={() => navigate("/profile")}>Profile</button>
      <button style={btnStyle} onClick={logout}>🚪 Logout</button>
    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 20px",
  background: "#ff5a5f",
  color: "white",
};

const btnStyle = {
  margin: "0 5px",
  padding: "8px 12px",
  border: "none",
  background: "white",
  color: "#ff5a5f",
  borderRadius: "5px",
  cursor: "pointer",
};