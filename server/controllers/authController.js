// server/controllers/authController.js
import User from '../models/User.js';

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
