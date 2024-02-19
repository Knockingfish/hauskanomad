// server/routes/auth.js

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Assuming you have a User model defined

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email in the database
    const user = await User.findOne({ email });

    // If user is not found or password doesn't match, return error
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Send token to client
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
