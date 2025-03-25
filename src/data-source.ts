// src/data-source.ts
import { DataSource } from 'typeorm';
import { User } from './entity/User'; // Import your entities

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USERNAME || 'your_db_user',
  password: process.env.DB_PASSWORD || 'your_db_password',
  database: process.env.DB_DATABASE || 'your_db_name',
  synchronize: false, // Use migrations in production
  logging: false,
  entities: [User], // Add your entities here
  migrations: [],
  subscribers: [],
});
