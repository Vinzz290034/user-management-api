import express from 'express';
import userRoutes from './routes/user';
import { AppDataSource } from './data-source';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected!");
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch(error => console.log(error));
