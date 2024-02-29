// server/routes/auth.js
import express from 'express';
const router = express.Router();

// Load your authentication controller
import { registerUser, loginUser, subscribeNewsletter, verifyEmail } from '../controllers/authController.js'; // Import the verifyEmail function

// Define the register route
router.post('/register', registerUser);

// Define the login route
router.post('/login', loginUser);

// Define the route for newsletter subscription
router.post('/subscribe', subscribeNewsletter);

// Define the route for email verification
router.get('/verify/:token', verifyEmail); // Define the endpoint for email verification

export default router;
