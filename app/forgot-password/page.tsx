import Header from "../components/Header";
import Footer from "../components/Footer";
import * as React from 'react';


export default function ForgotPasswordPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text">
        <div className="max-w-md w-full p-8 bg-white/5 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Forgot Your Password?
          </h1>
          <p className="text-center text-gray-400 mb-8">
            Enter your email address below, and we&apos;ll send you instructions
            to reset your password.
          </p>
          <form>
            {/* Email Field */}
            <div className="mb-6">
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
            Remember your password?{" "}
            <a
              href="/login"
              className="text-secondary hover:text-secondary-light transition duration-300"
            >
              Back to Login
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}