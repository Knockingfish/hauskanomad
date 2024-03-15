import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

export const loginUser = async (req, res) => {
  try {
    // Extract user input (email or username and password)
    const { email, password } = req.body;

    // Check if the user exists in the database based on email
    const user = await User.findOne({ email });

    // If user does not exist, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Check if the password is correct
    const isPasswordValid = await user.comparePassword(password);

    // If password is incorrect, return error
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token to the client
    res.json({ message: 'Login successful.', token });
  } catch (error) {
    console.error("Error during user login:", error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
