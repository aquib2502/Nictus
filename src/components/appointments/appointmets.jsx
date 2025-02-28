"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/layout/navbar.jsx";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    category: "",
    date: "",
    timeSlot: "",
    name: "", // ✅ Added name field
    mobile: "", // ✅ Added mobile field
    reason: "",
  });

  const [token, setToken] = useState("");
  const [blurBg, setBlurBg] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  const handleFocus = () => setBlurBg(true);
  const handleBlur = () => setBlurBg(false);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    console.log("Updated Form Data:", formData); // Debugging
  };

  // ✅ Compute form validity directly inside render
  const isFormValid =
    formData.category !== "" &&
    formData.date !== "" &&
    formData.timeSlot !== "" &&
    formData.name !== "" &&
    formData.mobile !== "" &&
    formData.reason !== "";
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const token = localStorage.getItem("authToken"); // Retrieve token again
      console.log("🔑 Token Retrieved:", token); // Debugging
  
      if (!token) {
          alert("Unauthorized: Please log in to continue.");
          return;
      }
  
      try {
          console.log("Submitting Request:", formData);
  
          const bookingResponse = await axios.post(
              "http://localhost:5000/api/appointments/book",
              {
                  type: formData.category,
                  date: formData.date,
                  time: formData.timeSlot,
                  reason: formData.reason,
                  name: formData.name,
                  mobile: formData.mobile
              },
              {
                  headers: { Authorization: `Bearer ${token}` }, // ✅ Ensure token is included
              }
          );
  
          if (bookingResponse?.data?.success) {
              alert(bookingResponse.data.message);
              const appointmentId = bookingResponse.data.appointment._id;
  
              const paymentResponse = await axios.post(
                  "http://localhost:5000/api/appointments/initiate-payment",
                  { appointmentId },
                  {
                      headers: { Authorization: `Bearer ${token}` }, // ✅ Ensure token is included
                  }
              );
  
              if (paymentResponse?.data?.success) {
                  const paymentLink = paymentResponse.data.paymentLink;
                  alert("Payment link generated. Redirecting to payment...");
                  window.open(paymentLink, "_blank");
              }
          }
      } catch (error) {
          console.error("❌ Error:", error);
          alert(
              error.response?.data?.message ||
              "An error occurred while booking the appointment."
          );
      }
  };
  

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/bg-image.jpg')" }}
    >
      <Navbar />
      <div
        className={`absolute inset-0 bg-[#3C5A40] bg-opacity-60 transition-all duration-300 ${
          blurBg ? "backdrop-blur-md" : ""
        }`}
      ></div>

      {/* Appointment Form Container */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="w-full max-w-lg bg-[#F8F2E7] p-8 rounded shadow-lg animate-popUp">
          <h2 className="text-3xl font-bold text-center text-[#3C5A40] mb-6">
            Book an Appointment
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Category Selection */}
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Select Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                required
              >
                <option value="">Select a category</option>
                <option value="General Consultation">
                  General Consultation
                </option>
                <option value="Dental Checkup">Dental Checkup</option>
                <option value="Eye Checkup">Eye Checkup</option>
                <option value="Specialist Visit">Specialist Visit</option>
              </select>
            </div>

            {/* Date Input */}
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                required
              />
            </div>

            {/* Time Slot Selection */}
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Select Time Slot
              </label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                required
              >
                <option value="">Select a time</option>
                <option value="10:00 AM - 11:00 AM">
                  10:00 AM - 11:00 AM
                </option>
                <option value="11:00 AM - 12:00 PM">
                  11:00 AM - 12:00 PM
                </option>
                <option value="2:00 PM - 3:00 PM">
                  2:00 PM - 3:00 PM
                </option>
                <option value="3:00 PM - 4:00 PM">
                  3:00 PM - 4:00 PM
                </option>
              </select>
            </div>

            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                placeholder="Enter full name"
                required
              />
            </div>

            {/* Mobile Number Input */}
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                placeholder="Enter mobile number"
                required
              />
            </div>

            {/* Reason for Appointment */}
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Reason for Appointment
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                placeholder="Enter the reason"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 rounded font-semibold transition-colors ${
                isFormValid
                  ? "bg-[#C1A35F] text-black hover:bg-[#c8ae68]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Proceed to Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
