import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/product.create.dto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const createdProduct = new this.productModel(createProductDto);
      return await createdProduct.save();
    } catch (error) {
      throw new HttpException(`Unable to create product: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllProducts(): Promise<Product[]> {
    try {
      return await this.productModel.find().exec();
    } catch (error) {
      throw new HttpException(`Unable to find products: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneProduct(id: string): Promise<Product> {
    try {
      const product = await this.productModel.findById(id).exec();
      if (!product) {
        throw new HttpException(`Unable to find product with id ${id}`, HttpStatus.NOT_FOUND);
      }
      return product;
    } catch (error) {
      throw new HttpException(`Unable to find product with id ${id}: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateProduct(
    id: string,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    try {
      const updatedProduct = await this.productModel.findByIdAndUpdate(
        id,
        createProductDto,
        { new: true },
      );
      if (!updatedProduct) {
        throw new HttpException(`Unable to update product with id ${id}`, HttpStatus.NOT_FOUND);
      }
      return updatedProduct;
    } catch (error) {
      throw new HttpException(`Unable to update product with id ${id}: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async deleteProduct(id: string): Promise<Product> {
    try {
      const deletedProduct = await this.productModel.findByIdAndDelete(id);
      if (!deletedProduct) {
        throw new HttpException(`Unable to delete product with id ${id}`, HttpStatus.NOT_FOUND);
      }
      return deletedProduct;
    } catch (error) {
      throw new HttpException(`Unable to delete product with id ${id}: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

