import { sendEmail } from "./emailController.js";
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import router from '../routes/auth.js';

export const registerUser = async (req, res) => {
  try {
    // Extract user input
    const { email, password, username } = req.body;

    // Check if email or username already exists in the database
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10); // 10 is the number of rounds

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with hashed password
    const newUser = new User({ email, password: hashedPassword, username });

    // Save the new user to the database
    await newUser.save();

    // Send a response
    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const loginUser = async (req, res) => {
  try {
    // Extract user input
    const { email, username, password } = req.body;

    // Check if the user exists in the database based on email or username
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if the password is correct
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Send a response
    return res.status(200).json({ message: 'Login successful.', user });
  } catch (error) {
    console.error("Error during user login:", error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Received subscription request for email:", email); // Log the received email

    // Simulate storing email in the database
    console.log(`Subscribed with email: ${email}`);

    // Send confirmation email
    await sendEmail(email);

    res.status(200).json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { subscribeNewsletter };
