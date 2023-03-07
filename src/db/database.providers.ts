import { MongooseModule } from '@nestjs/mongoose';

export const databaseProviders = [
  MongooseModule.forRoot('mongodb://localhost:27017/nutrafusion-backend'),
];
