// pages/api/events/add.ts
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "./../../lib/db";
import multer from "multer";

// Configure multer for handling file uploads
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`
    ); // Save files with a timestamp and sanitized name
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's default body parser to use multer
  },
};

interface MulterRequest extends NextApiRequest {
  file: any;
}

export default async function handler(
  req: MulterRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Use multer middleware to handle file upload
    const multerMiddleware = upload.single("image");

    // Wrap multer in a promise to handle async behavior
    const multerPromise = (req: MulterRequest, res: NextApiResponse) =>
      new Promise((resolve, reject) => {
        multerMiddleware(req, res, (err: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(null);
          }
        });
      });

    await multerPromise(req, res);

    // Extract form data
    const { title, description, date, location } = req.body;
    const image = req.file;

    if (!title || !description || !date || !location || !image) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Connect to the database
    const db = await connectToDatabase();
    const eventsCollection = db.collection("events");

    // Save the event to the database
    await eventsCollection.insertOne({
      title,
      description,
      date: new Date(date),
      location,
      imageUrl: `/uploads/${image.filename}`, // Store the relative path to the image
    });

    res.status(201).json({ message: "Event added successfully." });
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
}