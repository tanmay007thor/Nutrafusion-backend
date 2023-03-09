import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { JwtAuthGuard } from './jwt-auth.guard'; // <-- custom auth guard
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

  // @UseGuards(JwtAuthGuard) // <-- secure with JWT auth guard
  @Get('/v1/user')
  async findAll() {
    return this.userService.getUsers();
  }

  // @UseGuards(JwtAuthGuard) // <-- secure with JWT auth guard
  @Get('/v1/user/:id')
  async findOne(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  // @UseGuards(JwtAuthGuard) // <-- secure with JWT auth guard
  @Put('/v1/user/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  // @UseGuards(JwtAuthGuard) // <-- secure with JWT auth guard
  @Delete('/v1/user/:id')
  async delete(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Post('/v1/login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    return this.userService.login(email, password);
  }
}
