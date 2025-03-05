"use client";

import { useState } from "react";
import * as React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:4000/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
      } else {
        setError(data.error || "An unexpected error occurred.");
      }
    } catch (err) {
      console.error("Frontend error:", err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text">
        <div className="max-w-md w-full p-8 bg-white/5 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Forgot Password
          </h1>

          {/* Error or Success Message */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-text mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
                required
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md shadow-secondary-glow transition duration-300"
            >
              Reset Password
            </button>
          </form>

          {/* Back to Login Link */}
          <p className="text-center mt-6 text-gray-400">
            Remembered your password?{" "}
            <Link href="/login">
              <span className="text-secondary hover:text-secondary-light transition duration-300">
                Login
              </span>
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
