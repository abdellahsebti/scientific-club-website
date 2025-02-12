// pages/events.tsx
'use client';
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import * as React from 'react';

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events.");
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError("An error occurred while fetching events.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text">
        <p className="text-2xl">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text">
        <p className="text-red-500 text-2xl">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark text-text">
        <div className="max-w-4xl w-full p-8 bg-white/5 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Upcoming Events
          </h1>

          {events.length === 0 ? (
            <p className="text-center text-gray-400">No events available.</p>
          ) : (
            <ul className="space-y-6">
              {events.map((event) => (
                <li key={event._id} className="bg-white/10 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                  <p className="text-gray-400 mb-2">{event.description}</p>
                  <p className="text-sm text-gray-500">
                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Location:</strong> {event.location}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}