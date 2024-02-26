// server/routes/auth.js
import express from 'express';
const router = express.Router();

// Load your authentication controller
import { registerUser, loginUser, subscribeNewsletter } from '../controllers/authController.js';

// Define the register route
router.post('/register', registerUser);

// Define the login route
router.post('/login', loginUser);

// Define the route for newsletter subscription
router.post('/subscribe', subscribeNewsletter);

export default router;
