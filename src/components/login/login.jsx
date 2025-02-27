"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for redirection
import axios from "axios";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [blurBg, setBlurBg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(""); // Success message state
  const [error, setError] = useState(""); // Error message state
  const router = useRouter(); // Initialize Next.js router

  // Check if user is already logged in and redirect
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/"); // Redirect logged-in users to home
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Login Submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // Ensures cookies are sent if required
      });

      const token = response.data.token; // Assuming the token is returned from backend
      localStorage.setItem("authToken", token); // Store the token for persistent login

      setMessage("Login Successful! Redirecting...");
      setError("");

      setTimeout(() => {
        router.push("/"); // Redirect to home page after login
      }, 2000);
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setError("Invalid email or password");
    }
  };

  // Handle Register Submission
  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setMessage("Registered Successfully! Redirecting to login...");
      setError("");

      setTimeout(() => {
        setIsLogin(true);
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      setError("Registration failed. Try again.");
    }
  };

  // Toggle between Login and Register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setError("");
    setMessage("");
  };

  // When any input gains focus, blur the background
  const handleFocus = () => setBlurBg(true);

  // When any input loses focus, remove the blur
  const handleBlur = () => setBlurBg(false);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.jpg')" }}
    >
      {/* Background Overlay */}
      <div
        className={`absolute inset-0 bg-[#3C5A40] bg-opacity-60 transition-all duration-300 ${blurBg ? "backdrop-blur-md" : ""}`}
      ></div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-md bg-[#F8F2E7] p-8 rounded shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center text-[#3C5A40]">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Success Message */}
        {message && (
          <p className="mb-4 text-center text-green-500 font-medium">{message}</p>
        )}

        {/* Error Message */}
        {error && (
          <p className="mb-4 text-center text-red-500 font-medium">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-[#3C5A40]">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-[#3C5A40]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#3C5A40]">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-[#3C5A40]">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
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
