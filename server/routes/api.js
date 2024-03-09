import { Router } from 'express'; // Importing Router from express
import { addBooking } from './controllers/bookingController.js'; // Importing addBooking function
import { registerUser, loginUser, subscribeNewsletter, verifyEmail } from './controllers/authController.js'; // Importing functions from authController

const router = Router(); // Creating a router instance

// Define the register route
router.post('/register', registerUser);

// Define the login route
router.post('/login', loginUser);

// Define the route for newsletter subscription
router.post('/subscribe', subscribeNewsletter);

// Define the route for email verification
router.get('/verify/:token', verifyEmail);

// Define the route for adding bookings
router.post('/book', addBooking);

export default router;
