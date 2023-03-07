import { Injectable } from '@nestjs/common';
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
      throw new Error(`Unable to create product: ${error.message}`);
    }
  }

  async findAllProducts(): Promise<Product[]> {
    try {
      return await this.productModel.find().exec();
    } catch (error) {
      throw new Error(`Unable to find products: ${error.message}`);
    }
  }

  async findOneProduct(id: string): Promise<Product> {
    try {
      return await this.productModel.findById(id).exec();
    } catch (error) {
      throw new Error(`Unable to find product with id ${id}: ${error.message}`);
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
        throw new Error(`Unable to update product with id ${id}`);
      }
      return updatedProduct;
    } catch (error) {
      throw new Error(`Unable to update product with id ${id}: ${error.message}`);
    }
  }

  async deleteProduct(id: string): Promise<Product> {
    try {
      const deletedProduct = await this.productModel.findByIdAndDelete(id);
      if (!deletedProduct) {
        throw new Error(`Unable to delete product with id ${id}`);
      }
      return deletedProduct;
    } catch (error) {
      throw new Error(`Unable to delete product with id ${id}: ${error.message}`);
    }
  }
}
