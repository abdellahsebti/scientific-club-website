import Header from "../components/Header";
import Footer from "../components/Footer";
import * as React from 'react';
export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text">
        <div className="max-w-md w-full p-8 bg-white/5 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Login to Your Account
          </h1>
          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-text mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
              />
            </div>
            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-text mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
              />
            </div>
            {/* Forgot Password Link */}
            <div className="text-right mb-6">
              <a
                href="/forgot-password"
                className="text-secondary hover:text-secondary-light transition duration-300"
              >
                Forgot Password?
              </a>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md shadow-secondary-glow transition duration-300"
            >
              Login
            </button>
          </form>
          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-400">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-secondary hover:text-secondary-light transition duration-300"
            >
              Sign Up
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}