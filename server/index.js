import express from 'express';
import cors from 'cors';
import destinationRoutes from './routes/destinationRoutes.js';

const app = express();
const port = process.env.PORT || 5000; // Use default port in absence of reasons to do otherwise.

app.use(cors());
app.use(express.json());

app.use('/api', destinationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
