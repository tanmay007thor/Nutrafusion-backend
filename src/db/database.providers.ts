import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
export const databaseProviders = [
  MongooseModule.forRoot(process.env.DB_CONNECT),
];
