// src/data-source.ts
import "reflect-metadata";
import { DataSource } from 'typeorm';
import { User } from './entity/User'; // Import your entities
import dotenv from "dotenv";

dotenv.config(); 

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'Anyaforger_290034',
  database: process.env.DB_DATABASE || 'user_management',
  synchronize: false, // Use migrations in production
  logging: false,
  entities: [User], // Add your entities here
  migrations: ["src/migration/*.ts"],
  subscribers: [],
  driver: require('mysql2')
});
