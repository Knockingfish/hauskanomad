import { Router } from 'express';
import { addBooking } from '../controllers/bookingController.js';
import { registerUser } from '../controllers/registerUser.js';
import { verifyEmail } from '../controllers/verifyUser.js';
import { loginUser } from '../controllers/loginUser.js';
import { subscribeNewsletter } from '../controllers/subscribeNewsletter.js';

const router = Router(); // Creating a router instance

// Define the route for adding bookings
router.post('/book', addBooking);

// Define the register route
router.post('/register', registerUser);

// Define the route for email verification
router.get('/verify/:token', verifyEmail);

// Define the login route
router.post('/login', loginUser);

// Define the route for newsletter subscription
router.post('/subscribe', subscribeNewsletter);

export default router;
