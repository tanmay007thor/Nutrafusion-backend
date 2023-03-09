import { ArrayMaxSize, ArrayMinSize, IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

class ReviewDto {
  id: number;
  review: string;
}

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  gender: string;

  @ArrayMinSize(1)
  @ArrayMaxSize(5)
  @ValidateNested({ each: true })
  reviews: ReviewDto[];
}
