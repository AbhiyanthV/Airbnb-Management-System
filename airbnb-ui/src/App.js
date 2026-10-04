import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AddHouse from "./Components/AddHouse";
import ViewHouses from "./Components/ViewHouses";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <BrowserRouter>
    {
      <ToastContainer position="top-right" autoClose={2000}/>
    }
      <Routes>

        {/* Public */}
        <Route path="/" element={<Login />} />
          <Route
          path="/register"
          element={
              <Register />
          
          }
        />

        {/* Protected */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

              

        <Route
          path="/add-house"
          element={
            <ProtectedRoute>
              <AddHouse />
            </ProtectedRoute>
          }
        />
         
         <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/view-houses"
          element={
            <ProtectedRoute>
              <ViewHouses />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}