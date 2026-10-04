// Home.jsx
import Navbar from "./Navbar";
import ViewHouses from "./ViewHouses";
export default function Home() {
  const user = localStorage.getItem("username");

  return (
    <div>
      <Navbar/>
      <h2>Hi {user}!</h2>
      <h1>Welcome to Airbnb 🏠 </h1>
      <marquee behaviour ="scroll" direction="left"  bgcolor="white"><h4>Your house just single tap away.... </h4></marquee>
      <br></br>
     <ViewHouses showNavbar={false} showtitle={false} />
      
    </div>
  );
}