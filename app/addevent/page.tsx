"use client"; // Required for using React hooks
import * as React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AddEventPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous messages
    setError("");
    setSuccess("");

    // Validate inputs
    if (!title || !description || !date || !location || !image) {
      return setError("All fields are required.");
    }

    try {
      // Create FormData object to handle file upload
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("date", date);
      formData.append("location", location);
      if (image) {
        formData.append("image", image);
      }

      // Send the data to the backend API
      const response = await fetch("/api/events/add", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        // Reset form fields
        setTitle("");
        setDescription("");
        setDate("");
        setLocation("");
        setImage(null);
      } else {
        setError(data.message || "An unexpected error occurred.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text">
        <div className="max-w-md w-full p-8 bg-white/5 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Add New Event
          </h1>

          {/* Error or Success Message */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Title Field */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-text mb-2">
                Event Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter event title"
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
                required
              />
            </div>

            {/* Description Field */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-text mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter event description"
                rows={4}
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
                required
              ></textarea>
            </div>

            {/* Date Field */}
            <div className="mb-4">
              <label htmlFor="date" className="block text-text mb-2">
                Date
              </label>
              <input
                type="datetime-local"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
                required
              />
            </div>

            {/* Location Field */}
            <div className="mb-4">
              <label htmlFor="location" className="block text-text mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter event location"
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
                required
              />
            </div>

            {/* Image Upload Field */}
            <div className="mb-6">
              <label htmlFor="image" className="block text-text mb-2">
                Upload Event Photo
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md shadow-secondary-glow transition duration-300"
            >
              Add Event
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}