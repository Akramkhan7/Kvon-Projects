import express from 'express';
import cors from 'cors';
import db from './config/db.js';
import tasKRoutes from './Routes/taskRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', tasKRoutes);


app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});