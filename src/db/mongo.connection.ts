import { MongooseModule } from '@nestjs/mongoose';

export const databaseProviders = [
  MongooseModule.forRoot('mongodb://27017/nutrafusion-backend'),
];
