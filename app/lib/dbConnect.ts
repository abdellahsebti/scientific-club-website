// dbConnect.ts
import mongoose from "mongoose";
export default async function dbConnect() {
 

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    console.log("Connecting to MongoDB...");
    cached.promise = mongoose
      .connect(process.env.MONGO_URI, opts)
      .then((mongoose) => {
        console.log("Connected to MongoDB!");
        return { conn: mongoose };
      })
      .catch((err) => {
        console.error("MongoDB connection failed:", err);
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    console.error("Error awaiting MongoDB connection:", err);
    throw err;
  }
}

module.exports = dbConnect;
}