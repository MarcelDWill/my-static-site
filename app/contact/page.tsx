"use client";
import { useState } from "react";
//import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error state
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
                  {/*<Image 
                    src="/contactbg.png"
                    alt="Background"
                    fill
                    quality={100}
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all duration-500 dark:opacity-70"
                  />*/}
    <div className="relative w-screen h-screen flex flex-col items-center justify-center p-6">
      <h1 className="px-2 py-1 text-4xl font-bold text-center bg-gray-700 bg-opacity-60 rounded-lg shadow-md transition-all duration-300 transform">📩 Contact Me</h1>
      <p className="px-2 py-1 text-center text-black-900 dark:text-gray-300 bg-gray-700 bg-opacity-60 rounded-lg shadow-md mt-2">
        Have a question or want to collaborate? Send me a message below.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-lg bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Name</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Message</label>
            <textarea
              className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
              placeholder="Your Message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-bold text-green-500">✅ Message Sent!</h2>
          <p className="text-gray-600 dark:text-gray-300">I will get back to you soon.</p>
        </div>
      )}
    </div>
    </div>
  );
}

