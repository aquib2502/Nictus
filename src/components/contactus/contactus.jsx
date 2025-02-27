"use client";

import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: "url('/bg-image.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contact Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
        className="relative bg-[#b06324]  p-10 rounded-2xl shadow-xl max-w-lg w-full text-black mt-10 mb-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-gray-900"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-gray-600 text-center mt-2"
        >
          We'd love to hear from you!
        </motion.p>

        {/* Contact Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-5 space-y-4 text-gray-800"
        >
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500 text-lg" />
            <p className="text-sm">aquibhingwala@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-500 text-lg" />
            <p className="text-sm">+91 9898987656</p>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-500 text-lg" />
            <p className="text-sm">123 Main Street, NY</p>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.form 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-6 space-y-5"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6", boxShadow: "0px 4px 10px rgba(59, 130, 246, 0.2)" }}
              type="text"
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6", boxShadow: "0px 4px 10px rgba(59, 130, 246, 0.2)" }}
              type="email"
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <motion.textarea
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6", boxShadow: "0px 4px 10px rgba(59, 130, 246, 0.2)" }}
              className="w-full px-4 py-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Write your message..."
              rows={4}
            ></motion.textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb", boxShadow: "0px 4px 15px rgba(37, 99, 235, 0.4)" }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
