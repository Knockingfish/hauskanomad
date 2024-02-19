// server/routes/auth.js
import express from 'express';
const router = express.Router();

// Load your authentication controller
import { registerUser } from '../controllers/authController.js';

// Define the register route
router.post('/register', registerUser);

export default router;
