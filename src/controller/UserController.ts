// src/controller/UserController.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export class UserController {
  static async createUser(req: Request, res: Response): Promise<Response> {
    const userRepository = getRepository(User);
    const { firstName, lastName, email } = req.body;

    const newUser = userRepository.create({ firstName, lastName, email });

    try {
      const savedUser = await userRepository.save(newUser);
      return res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ message: 'Failed to create user' });
    }
  }
}