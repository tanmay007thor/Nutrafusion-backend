import { IsString, IsInt, IsNotEmpty, IsNumber, IsArray, ValidateNested, isNumber } from 'class-validator';
import { Type } from 'class-transformer';

class ImageDto {
  @IsString()
  url: string;

  @IsString()
  alt: string;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  calories: number;

  @IsNumber()
  nutriscore: number;

  @IsNumber()
  rating: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  images: ImageDto[];
  @IsNumber()
  likes : Number ;
}

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  calories: number;

  @IsNumber()
  nutriscore: number;

  @IsNumber()
  rating: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  images: ImageDto[];
  @IsNumber()
  likes : Number ;
}
