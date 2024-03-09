import User from '../models/User.js';

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    // Find the user based on the verification token
    const user = await User.findOne({ emailVerificationToken: token });

    // If no user is found with the provided token, return an error
    if (!user) {
      return res.status(404).json({ message: 'Invalid or expired token.' });
    }

    // Mark the user's email as verified
    user.emailVerified = true;
    user.emailVerificationToken = undefined; // Remove the verification token
    await user.save();

    // Redirect the user to a success page in the frontend
    return res.redirect('http://localhost:3000/verified'); // Adjust the URL as needed
  } catch (error) {
    console.error("Error during email verification:", error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};
