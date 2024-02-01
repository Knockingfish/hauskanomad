// server/index.js
import express from 'express';
import cors from 'cors';
import destinationRoutes from './routes/destinationRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect your destination routes
app.use('/api', destinationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
