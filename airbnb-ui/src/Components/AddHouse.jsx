import { useState } from "react";
import API from "../api/axiosConfig";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import "./AddHouse.css";

export default function AddHouse() {
  const [form, setForm] = useState({
    imgURL: "",
    address: "",
    pincode: "",
    details: "",
    rent: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // If user pastes URL, remove selected file
    if (e.target.name === "imgURL" && e.target.value) {
      setImage(null);

      const fileInput = document.getElementById("house-image");

      if (fileInput) {
        fileInput.value = "";
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Only JPG, JPEG and PNG
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG, JPEG or PNG images are allowed");
      e.target.value = "";
      return;
    }

    // Maximum 5 MB
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5 MB");
      e.target.value = "";
      return;
    }

    setImage(file);

    // Convert image to Base64
    const reader = new FileReader();

    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        imgURL: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const addHouse = async (e) => {
    e.preventDefault();

    // All fields required
    if (!form.imgURL) {
      toast.error("Please paste an image URL or upload an image");
      return;
    }

    if (!form.address.trim()) {
      toast.error("Address is required");
      return;
    }

    if (!form.pincode.trim()) {
      toast.error("Pincode is required");
      return;
    }

    if (!form.details.trim()) {
      toast.error("House details are required");
      return;
    }

    if (!form.rent) {
      toast.error("Rent is required");
      return;
    }

    // Pincode validation
    if (!/^\d{6}$/.test(form.pincode)) {
      toast.error("Pincode must be exactly 6 digits");
      return;
    }

    // Rent validation
    if (Number(form.rent) <= 0) {
      toast.error("Rent must be greater than 0");
      return;
    }

    try {
      // EXACTLY matches your addHouseReq DTO
      const payload = {
        imgURL: form.imgURL,
        address: form.address,
        pincode: Number(form.pincode),
        details: form.details,
        rent: Number(form.rent),
        user_id: null,
      };

      const res = await API.post("/house/add", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success(
        `House added ✅ Reference Id: ${res.data}`
      );

      setForm({
        imgURL: "",
        address: "",
        pincode: "",
        details: "",
        rent: "",
      });

      setImage(null);

      const fileInput =
        document.getElementById("house-image");

      if (fileInput) {
        fileInput.value = "";
      }

    } catch (err) {
      toast.error(
        err.response?.data || "Error adding house"
      );
    }
  };

  return (
    <div className="add-house-page">

      <Navbar />

      <div className="add-house-container">

        <div className="add-house-card">

          <div className="add-house-header">
            <h2>Add Your House</h2>

            <p>
              Enter your property details below
            </p>
          </div>

          <form
            className="house-form"
            onSubmit={addHouse}
          >

            {/* IMAGE */}

            <div className="form-group">

              <label>
                House Image
                <span className="required">*</span>
              </label>

              <div className="image-input-wrapper">

                <input
                  type="text"
                  name="imgURL"
                  placeholder="Paste image URL or choose a file..."
                  value={
                    image
                      ? image.name
                      : form.imgURL
                  }
                  onChange={handleChange}
                  disabled={!!image}
                />

                <label
                  htmlFor="house-image"
                  className="upload-btn"
                >
                  📁 Choose File
                </label>

                <input
                  id="house-image"
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  onChange={handleImageChange}
                  hidden
                />

              </div>

              {image && (
                <p className="selected-file">
                  📷 {image.name}
                </p>
              )}

              <small className="image-help">
                Paste an image URL or upload JPG,
                JPEG or PNG
              </small>

            </div>


            {/* ADDRESS */}

            <div className="form-group">

              <label>
                Address
                <span className="required">*</span>
              </label>

              <input
                type="text"
                name="address"
                placeholder="Enter house address"
                value={form.address}
                onChange={handleChange}
                required
              />

            </div>


            {/* PINCODE + RENT */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Pincode
                  <span className="required">*</span>
                </label>

                <input
                  type="text"
                  name="pincode"
                  placeholder="560001"
                  value={form.pincode}
                  onChange={handleChange}
                  maxLength="6"
                  inputMode="numeric"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Monthly Rent
                  <span className="required">*</span>
                </label>

                <input
                  type="number"
                  name="rent"
                  placeholder="25000"
                  value={form.rent}
                  onChange={handleChange}
                  min="1"
                  required
                />

              </div>

            </div>


            {/* DETAILS */}

            <div className="form-group">

              <label>
                House Details
                <span className="required">*</span>
              </label>

              <textarea
                name="details"
                placeholder="Describe the house, rooms, amenities, etc."
                value={form.details}
                onChange={handleChange}
                rows="2"
                required
              />

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="add-house-btn"
            >
              Add House
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
