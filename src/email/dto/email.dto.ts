import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

enum WhereDidYouHearAboutUs {
  Google = 'Google',
  Facebook = 'Facebook',
  Twitter = 'Twitter',
  LinkedIn = 'LinkedIn',
  Friend = 'Friend',
  Other = 'Other',
}

export class CreateEmailDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsEnum(WhereDidYouHearAboutUs)
  whereDidYouHearAboutUs: WhereDidYouHearAboutUs;
}
