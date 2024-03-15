import { Router } from 'express';
import { addBooking, getBookings, deleteBooking } from '../controllers/bookingController.js';
import { registerUser } from '../controllers/registerUser.js';
import { verifyEmail } from '../controllers/verifyUser.js';
import { loginUser } from '../controllers/loginUser.js';
import { subscribeNewsletter } from '../controllers/subscribeNewsletter.js';
import authMiddleware from '../middleware/auth.js';

const router = Router(); // Creating a router instance

// Define the route for adding a booking
router.post('/bookings', addBooking);

// Define the route for retrieving all bookings
router.get('/bookings', getBookings);

// Define the route for deleting a booking by ID
router.delete('/bookings/:id', deleteBooking);

// Define the register route
router.post('/register', registerUser);

// Define the route for email verification
router.get('/verify/:token', verifyEmail);

// Define the login route
router.post('/login', loginUser);

// Define the route for newsletter subscription
router.post('/subscribe', subscribeNewsletter);

export default router;
