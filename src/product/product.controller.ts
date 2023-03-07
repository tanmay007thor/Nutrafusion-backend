import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../user/jwt-auth.guard'; // <-- custom auth guard
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.create.dto';
import { UpdateProductDto } from './dto/product.create.dto';
import { Product } from './product.schema';

@Controller('api/v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }
  
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOneProduct(id);
  }

  @UseGuards(JwtAuthGuard) // <-- secure with JWT auth guard
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @UseGuards(JwtAuthGuard) // <-- secure with JWT auth guard
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Product> {
    return this.productService.deleteProduct(id);
  }
}
