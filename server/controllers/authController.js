import express from 'express';
import User from '../models/User.js';

// Initialize the router
const authRoutes = express.Router();

// Route handlers
export const registerUser = async (req, res) => {
  try {
    // Extract user input
    const { email, password, username } = req.body;

    // Check if email or username already exists in the database
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Create a new user
    const newUser = new User({ email, password, username });

    // Save the new user to the database
    await newUser.save();

    // Send a response
    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const loginUser = async (req, res) => {
    try {
      // Extract user input
      const { email, password } = req.body;
  
      // Find the user in the database by email
      const existingUser = await User.findOne({ email });
  
      // If the user does not exist or password does not match, return an error
      if (!existingUser || existingUser.password !== password) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }
  
      // If email and password match, return success message
      return res.status(200).json({ message: 'Login successful.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error.' });
    }
  };

// Define the register and login routes
authRoutes.post('/register', registerUser);
authRoutes.post('/login', loginUser);

export default authRoutes; // Export the router
