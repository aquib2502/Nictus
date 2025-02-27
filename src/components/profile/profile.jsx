"use client";
import React, { useState } from "react";

export default function ProfilePage() {
  const [isLogin, setIsLogin] = useState(true);
  const [blurBg, setBlurBg] = useState(false);

  // Toggle between Login and Register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Demo submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  // When any input gains focus, blur the background
  const handleFocus = () => setBlurBg(true);

  // When any input loses focus, remove the blur
  const handleBlur = () => setBlurBg(false);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      // Background Image
      style={{ backgroundImage: "url('/bg-image.jpg')" }} // Ensure bg-image.jpg is in /public
    >
      {/* Deep Green Overlay with bg-opacity instead of opacity for proper backdrop-blur */}
      <div
        className={`
          absolute inset-0 bg-[#3C5A40] bg-opacity-60 
          transition-all duration-300
          ${blurBg ? "backdrop-blur-md" : ""}
        `}
      ></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md bg-[#F8F2E7] p-8 rounded shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center text-[#3C5A40]">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-[#3C5A40]">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-[#3C5A40]">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#3C5A40]">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-[#3C5A40]">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#C1A35F] text-black py-2 rounded hover:bg-[#c8ae68] transition-colors font-semibold"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button onClick={toggleForm} className="text-[#561A1A] hover:underline">
            {isLogin
              ? "Don't have an account? Register here"
              : "Already have an account? Login here"}
          </button>
        </div>
      </div>
    </div>
  );
}
