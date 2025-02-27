"use client";

import { useState } from "react";
import axios from "axios";
import NextImage from "next/image";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email: formData.email,
                    password: formData.password,
                },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log("Login Successful:", response.data);
        } catch (error) {
            setError(error.response?.data?.message || "Invalid login credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/bg-image.jpg')" }}>
            
            {/* Dark Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>

            {/* Login Form Container */}
            <div className="relative w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg z-10">
                {/* Logo & Title */}
                <div className="text-center">
                    {/* <NextImage src="/logo1.webp" alt="logo" width={32} height={32} className="mr-2"/> */}
                    <h2 className="text-3xl font-semibold text-white">Welcome Back</h2>
                    <p className="text-gray-400 text-sm">Sign in to your account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition duration-200"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition duration-200"
                            required
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 text-gray-400">
                            <input type="checkbox" className="accent-green-500" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="text-green-400 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500 text-sm text-center bg-red-900 py-2 rounded-md">
                            {error}
                        </p>
                    )}

                    {/* Login Button with Spinner */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200 flex justify-center items-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex items-center">
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8H4z"
                                    ></path>
                                </svg>
                                Signing in...
                            </div>
                        ) : (
                            "Sign in"
                        )}
                    </button>
                </form>

                {/* Signup Link */}
                <p className="text-center text-sm text-gray-400 mt-4">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-green-400 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
