import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";
import { toast } from "react-toastify";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    if (!name.trim() || !password.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8080/user/login",
        {
          name,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.id);
      localStorage.setItem("username", data.name);

      toast.success("Login Successful ✅");

      navigate("/home");
    } catch (err) {
      toast.error(err.response?.data || "Login Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* Header */}
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to your account</p>
        </div>

        {/* Login Form */}
        <form className="register-form" onSubmit={loginUser}>

          {/* Username */}
          <div className="auth-form-group">
            <label htmlFor="username">
              Username
              <span className="required-star">*</span>
            </label>

            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="auth-form-group">
            <label htmlFor="password">
              Password
              <span className="required-star">*</span>
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="register-btn">
            Login
          </button>

        </form>

        {/* Register */}
        <div className="auth-footer">
          <span>Don't have an account?</span>
          <Link to="/register">Register</Link>
        </div>

      </div>
    </div>
  );
}

