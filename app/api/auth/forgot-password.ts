
import { NextApiRequest, NextApiResponse } from "next";
import * as nodemailer from "nodemailer"; 
import { connectToDatabase } from "../../lib/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  // Basic validation
  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    // Connect to the database
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");

    // Find the user by email
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Generate a password reset token
    const resetToken = Math.random().toString(36).substring(2, 15);

    // Save the token to the user's record
    await usersCollection.updateOne(
      { email },
      { $set: { resetToken, resetTokenExpiry: Date.now() + 3600000 } } // Token valid for 1 hour
    );

    // Send the reset link via email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `Click the link to reset your password: http://localhost:3000/reset-password?token=${resetToken}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Password reset link sent to your email." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
}