import { useState } from "react";
import axios from "axios";
import "./auth.css";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    password: "",
    dob: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (form.mobile.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits");
      return;
    }

    try {
      const payload = {
        ...form,
        mobile: Number(form.mobile),
      };

      const res = await axios.post(
        "http://localhost:8080/user/register",
        payload
      );

      toast.success(`User Registered ✅ ID: ${res.data}`);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Register a new account</p>
        </div>

        <form className="register-form" onSubmit={registerUser}>

          {/* Name */}
          <div className="auth-form-group">
            <label htmlFor="name">
              Full Name
              <span className="required-star">*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
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
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* DOB */}
          <div className="auth-form-group">
            <label htmlFor="dob">
              Date of Birth
              <span className="required-star">*</span>
            </label>

            <input
              id="dob"
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile */}
          <div className="auth-form-group">
            <label htmlFor="mobile">
              Mobile Number
              <span className="required-star">*</span>
            </label>

            <input
              id="mobile"
              name="mobile"
              type="text"
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter 10 digit mobile number"
              value={form.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                setForm({
                  ...form,
                  mobile: value,
                });
              }}
              required
            />

            <small>Enter exactly 10 digits</small>
          </div>

          {/* Submit */}
          <button type="submit" className="register-btn">
            Create Account
          </button>

        </form>

        <div className="auth-footer">
          <span>Already have an account?</span>
          <Link to="/">Login</Link>
        </div>

      </div>

    </div>
  );
}
