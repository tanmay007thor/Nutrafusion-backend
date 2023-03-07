import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create.user.dto';
import { IsOptional } from 'class-validator';

class ReviewDto {
  @IsOptional()
  id: number;
  review: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  name: string;
  password: string;
  updatedAt: Date;

  @IsOptional()
  reviews: ReviewDto[];
}
