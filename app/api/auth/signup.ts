// pages/api/auth/signup.ts
import { NextApiRequest, NextApiResponse } from "next";
import * as bcryptjs from "bcryptjs";
import { connectToDatabase } from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Ensure only POST requests are allowed
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Extract email and password from the request body
  const { email, password } = req.body;

  // Basic validation: Ensure email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  // Validate email format using a simple regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  // Validate password length (e.g., minimum 6 characters)
  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long." });
  }

  try {
    // Connect to the database
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");

    // Check if the user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    // Hash the password securely
    const hashedPassword = await bcryptjs.hash(password, 12);

    // Save the user to the database
    await usersCollection.insertOne({
      email,
      password: hashedPassword,
    });

    // Respond with success message
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error during signup:", error);

    // Respond with a generic error message
    res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
}