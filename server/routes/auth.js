import express from 'express';
const router = express.Router();

import { registerUser, loginUser } from '../controllers/authController.js';

// Define the register and login routes
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
