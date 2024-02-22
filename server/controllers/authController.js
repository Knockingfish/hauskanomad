// server/controllers/authController.js
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

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

    // Create a new user with hashed password
    const newUser = new User({ email, password: hashedPassword, username });

    // Save the new user to the database
    await newUser.save();

    // Send a response
    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

//export const registerUser = async (req, res) => {
//  try {
//    // Extract user input
//    const { email, password, username } = req.body;
//
//    // Check if email or username already exists in the database
//    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//
//    if (existingUser) {
//      return res.status(400).json({ message: 'User already exists.' });
//    }
//
//    // Create a new user
//    const newUser = new User({ email, password, username });
//
//    // Save the new user to the database
//    await newUser.save();
//
//    // Send a response
//    return res.status(201).json({ message: 'User registered successfully.' });
//  } catch (error) {
//    console.error(error);
//    return res.status(500).json({ message: 'Internal server error.' });
//  }
//};

// Function to log server activity
const logActivity = (message) => {
  console.log(`[Server Activity] ${message}`);
};

export const loginUser = async (req, res) => {
  try {
    // Extract user input
    const { email, username, password } = req.body;

    // Check if the user exists in the database based on email or username
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
      console.log("User not found");
    }

    // Check if the password is correct
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password.' });
      console.log("Invalid password");
    }

    // Send a response
    return res.status(200).json({ message: 'Login successful.', user });
    console.log("Login Successful");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
    console.log("shits fucked");
  }
};

//export const loginUser = async (req, res) => {
//  try {
//    // Extract user input
//    const { email, password } = req.body;
//
//    // Check if the user exists in the database
//    const user = await User.findOne({ email });
//
//    if (!user) {
//      return res.status(404).json({ message: 'User not found.' });
//    }
//
//    // Check if the password is correct
//    const isPasswordValid = await user.comparePassword(password);
//
//    if (!isPasswordValid) {
//      return res.status(401).json({ message: 'Invalid password.' });
//    }
//
//    // Send a response
//    return res.status(200).json({ message: 'Login successful.', user });
//  } catch (error) {
//    console.error(error);
//    return res.status(500).json({ message: 'Internal server error.' });
//  }
//};
