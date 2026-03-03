import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running perfectly!' });
});

mongoose
  .connect(process.env.MONGO_URI || '')
  .then(() => {
    console.log('[server]: Connected to MongoDB');
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err: any) => {
    console.error('[server]: Failed to connect to MongoDB', err);
  });
