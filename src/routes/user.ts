import { Router } from 'express';
import { User } from '../entity/User';
import { AppDataSource } from '../data-source';

const router = Router();

router.post('/create', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const userRepo = AppDataSource.getRepository(User);
    const existingUser = await userRepo.findOneBy({ email });

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = userRepo.create({ name, email, password });
    await userRepo.save(newUser);

    return res.status(201).json({ message: 'User created successfully', user: newUser });
});

export default router;
