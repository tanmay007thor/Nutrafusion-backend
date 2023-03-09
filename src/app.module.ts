import { Module } from '@nestjs/common';
import { UserController } from './User/user.controller';
import { UserService } from './User/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './User/user.schema';
import { ProductModule } from './product/product.module';
import { EmailModule } from './email/email.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECT), 
            MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]) ,
         ProductModule , EmailModule ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
