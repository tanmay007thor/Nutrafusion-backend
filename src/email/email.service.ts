import { Injectable , HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Email, EmailDocument } from './email.schema';
import { CreateEmailDto } from './dto/email.dto';

@Injectable()
export class EmailService {
  constructor(@InjectModel('Email') private emailModel: Model<EmailDocument>) {}

  async createEmail(createEmailDto: CreateEmailDto): Promise<Email> {
    try {
      const createdEmail = new this.emailModel(createEmailDto);
      return await createdEmail.save();
    } catch (error) {
      throw new HttpException(`Unable to create email: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
}
