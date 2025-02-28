"use client";
import React, { useState } from "react";
import Navbar from "../../components/layout/navbar.jsx";


export default function ContactUsPage() {
  const [blurBg, setBlurBg] = useState(false);

  const handleFocus = () => setBlurBg(true);
  const handleBlur = () => setBlurBg(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/bg-image.jpg')" }}
    >
      <Navbar />
      {/* Deep Green Overlay with Conditional Blur */}
      <div
        className={`
          absolute inset-0 bg-[#3C5A40] bg-opacity-60 transition-all duration-300
          ${blurBg ? "backdrop-blur-md" : ""}
        `}
      ></div>

   

      {/* Contact Form Container */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="w-full max-w-lg bg-[#F8F2E7] p-8 rounded shadow-lg animate-popUp">
          <h2 className="text-3xl font-bold text-center text-[#3C5A40] mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40]"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#3C5A40] font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#C1A35F] text-[#3C5A40] h-32"
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#C1A35F] text-black py-2 rounded hover:bg-[#c8ae68] transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Pop-Up Animation Keyframes */}
      <style jsx>{`
        @keyframes popUp {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-popUp {
          animation: popUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
