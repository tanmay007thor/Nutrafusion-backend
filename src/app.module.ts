import { Module } from '@nestjs/common';
import { UserController } from './User/user.controller';
import { UserService } from './User/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './User/user.schema';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nutrafusion-backend'), 
            MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]) ,
         ProductModule ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
