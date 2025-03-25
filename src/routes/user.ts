// src/routes/user.ts
import { Router } from 'express';
import { UserController } from '../controller/UserController';

const router = Router();

// Define the route for creating a user
router.post('/users', UserController.createUser);

export default router;