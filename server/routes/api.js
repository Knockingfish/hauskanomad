import express from 'express';

const router = express.Router();

// Placeholder data (replace with database interactions later)
// Given this is for Home.js, it might be removed at a later point; little of Home.js's content should be database sourced.
const homeData = {
  title: 'Welcome to Hauskanomad!',
  description: 'Explore unique accommodations and book your stay.',
};

// Define routes; this controls requesting relevant data for different pages based on frontend navigation
router.get('/home', (req, res) => {
  res.json(homeData);
});
// additional routes will be defined as needed

export default router;
