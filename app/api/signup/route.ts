import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { dbConnect} from "../../lib/dbConnect";
import User from "../../lib/models/User";

const saltRounds = 10;

export async function POST(request) {
  try {
    console.log("Attempting to connect to MongoDB...");
    await dbConnect();

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    console.log("Checking if user exists...");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log("Creating user in MongoDB...");
    await User.create({ email, password: hashedPassword });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/signup:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}