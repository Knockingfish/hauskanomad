import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User.js';
import sendVerificationEmail from './sendVerificationEmail.js';

const generateVerificationToken = () => {
  // Generate a unique verification token using UUID
  return uuidv4();
};

export const registerUser = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // Check if email or username already exists in the database
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Generate verification token
    const verificationToken = generateVerificationToken();

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword, username, emailVerificationToken: verificationToken });

    // Save the new user to the database
    await newUser.save();

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    // Respond with a message asking the user to verify their email
    return res.status(201).json({ message: 'User registered successfully. Please verify your email.' });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
