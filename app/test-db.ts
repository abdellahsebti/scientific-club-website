
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "./lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");

    // Insert a test document
    const result = await usersCollection.insertOne({ name: "Test User" });

    res.status(200).json({
      message: "Database connection successful!",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database connection failed." });
  }
}