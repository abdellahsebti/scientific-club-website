require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// Retrieve MongoDB URI and PORT from environment variables
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 30000 })

if (!MONGO_URI) {
  console.error("MONGO_URI environment variable is not set.");
  process.exit(1);
}

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Define a Mongoose schema and model for users (including reset token fields)
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
});
const User = mongoose.model("User", userSchema);

const saltRounds = 10;

// Signup endpoint with password hashing
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error in /api/signup:", err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Login endpoint with bcrypt password comparison
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    return res.json({ message: "Login successful" });
  } catch (err) {
    console.error("Error in /api/login:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Forgot Password endpoint with email sending
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }
  try {
    const user = await User.findOne({ email });
    // Respond with the same message even if user not found (for security)
    if (!user) {
      return res.json({ message: "If the email is registered, a reset link has been sent." });
    }
    
    // Generate a reset token and set expiration (1 hour)
    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();
    
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    // Define mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset Request',
      text: `You requested a password reset.\n\nPlease use the following code to reset your password:\n\n${token}\n\nThis code will expire in 1 hour.\n\nIf you did not request a password reset, please ignore this email.`
    };
    
    // Send the email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ error: "Error sending email." });
      }
      return res.json({ message: "If the email is registered, a reset link has been sent." });
    });
    
  } catch (err) {
    console.error("Error in /api/forgot-password:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// (Optional) Endpoint to retrieve all users (for testing purposes)
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
