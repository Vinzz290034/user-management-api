// src/index.ts
import express from 'express';
import { AppDataSource } from './data-source'; // Assuming you have a data-source setup for TypeORM
import userRoutes from './routes/user';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Connect to the database
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    // Middleware to parse JSON request bodies
    app.use(bodyParser.json());

    // Register the user routes
    app.use('/api', userRoutes); // You might want a base API path

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });