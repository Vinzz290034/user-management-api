import { Router } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../index";
import bcrypt from 'bcrypt';

const router = Router();

router.post("/", async (req, res) => {

  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10); 

  const user = new User();
  user.firstName = req.body.firstName; 
  user.lastName = req.body.lastName;  
  user.email = req.body.email;
  user.password = hashedPassword;

  await AppDataSource.manager.save(user);
  res.status(201).json(user);
  
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await AppDataSource.manager.delete(User, id);

  if (result.affected === 0) {
    res.status(404).send("User not found");
  }
  res.send("User deleted successfully");
});

router.get("/", async (req, res) => {
  const users = await AppDataSource.manager.find(User);
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await AppDataSource.manager.findOne(User, { where: { id: Number(id) } });

  if (!user) {
    res.status(404).send("User not found");
  }
  res.json(user);
});


export default router;
