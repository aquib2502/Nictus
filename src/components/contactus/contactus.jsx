"use client";

import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Contact Form Container */}
      <div className="relative bg-gray-900 p-8 rounded-xl shadow-2xl max-w-lg w-full text-white mt-10 mb-10">
        <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        <p className="text-gray-400 text-center mt-1">We'd love to hear from you!</p>

        {/* Contact Details */}
        <div className="mt-1 space-y-4 text-gray-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400 text-lg" />
            <p className="text-sm">aquibhingwala@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-400 text-lg" />
            <p className="text-sm">+91 9898987656</p>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-400 text-lg" />
            <p className="text-sm">123 Main Street, NY</p>
          </div>
        </div>

        {/* Form Section */}
        <form className="mt-3 space-y-5">
          <div>
            <label className="block text-gray-300 font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">Message</label>
            <textarea
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Write your message..."
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
