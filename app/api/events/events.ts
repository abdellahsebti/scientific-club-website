// pages/api/events.ts
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Connect to the database
    const db = await connectToDatabase();
    const eventsCollection = db.collection("events");

    // Fetch all events
    const events = await eventsCollection.find({}).toArray();

    // Convert MongoDB ObjectId to string for serialization
    const formattedEvents = events.map((event) => ({
      ...event,
      _id: event._id.toString(),
    }));

    res.status(200).json(formattedEvents);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
}