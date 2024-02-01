import express from 'express';

const router = express.Router();

// Placeholder data (replace with database interactions later)
const homeData = {
  title: 'Welcome to Hauskanomad!',
  description: 'Explore unique accommodations and book your stay.',
};

// Define routes
router.get('/home', (req, res) => {
  res.json(homeData);
});

export default router;
