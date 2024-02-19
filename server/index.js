import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './controllers/authController.js'; // Make sure to use the correct path

dotenv.config();

const app = express();

app.use('/api/auth', authRoutes); // Use authRoutes for your API auth routes

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
