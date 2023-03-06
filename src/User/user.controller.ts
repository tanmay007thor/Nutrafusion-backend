import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto'
import { UpdateUserDto } from './dto/update.user.dto';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/v1/user')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get('/v1/user')
  async findAll() {
    return this.userService.getUsers();
  }

  @Get('/v1/user/:id')
  async findOne(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Put('/v1/user/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete('/v1/user/:id')
  async delete(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
