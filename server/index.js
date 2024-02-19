// server/index.mjs

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import destinationRoutes from './routes/destinationRoutes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Configure your server
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Register your routes
app.use('/auth', authRoutes);
app.use('/destination', destinationRoutes);

// Start your server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
