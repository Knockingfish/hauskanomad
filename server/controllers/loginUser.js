import User from '../models/User.js';

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
