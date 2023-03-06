import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/v1/user')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }

  @Get('/v1/user')
  async findAll() {
    return this.appService.getUsers();
  }

  @Get('/v1/user/:id')
  async findOne(@Param('id') id: string) {
    return this.appService.getUserById(id);
  }

  @Put('/v1/user/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.appService.updateUser(id, updateUserDto);
  }

  @Delete('/v1/user/:id')
  async delete(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
