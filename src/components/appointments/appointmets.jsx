"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    date: "",
    timeSlot: "",
    reason: "",
  });

  const isFormValid = formData.date && formData.timeSlot && formData.reason;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 text-center mb-6"
        >
          Book an Appointment
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="mt-4 space-y-6"
        >
          {/* Date Input */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-shadow"
              required
            />
          </motion.div>

          {/* Time Slot Selection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <label htmlFor="timeSlot" className="block text-gray-700 font-medium mb-1">
              Select Time Slot
            </label>
            <select
              id="timeSlot"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-shadow"
              required
            >
              <option value="" disabled>Select a time</option>
              <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
              <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
              <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
              <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
            </select>
          </motion.div>

          {/* Reason for Appointment */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <label htmlFor="reason" className="block text-gray-700 font-medium mb-1">
              Reason for Appointment
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition-shadow"
              placeholder="Enter the reason"
              rows="4"
              required
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={!isFormValid}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: isFormValid ? 1.05 : 1 }}
            className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
              isFormValid
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Book Appointment
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
