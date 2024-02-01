import express from 'express';
import { getAllDestinations } from '../controllers/destinationController.js';

const router = express.Router();

// Define the endpoint for fetching destinations
router.get('/destinations', getAllDestinations);

export default router;
