// src/routes/user.ts
import { Router } from 'express';
import { UserController } from '../controller/UserController';

const router = Router();

// Define the route for creating a user
router.post('/users', UserController.createUser);

export default router;

router.get("/", async (req, res) => {
    const users = await AppDataSource.manager.find(User);
    res.json(users);
  });
  
  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await AppDataSource.manager.findOne(User, { where: { id: Number(id) } });
  
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  });
  