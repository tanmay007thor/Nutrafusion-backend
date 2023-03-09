import { Body, Controller, Post } from "@nestjs/common";
import { EmailService } from "./email.service";
import { CreateEmailDto } from "./dto/email.dto";
import { Email } from "./email.schema";
@Controller('api/v1/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async createEmail(@Body() createEmailDto: CreateEmailDto): Promise<Email> {
    return await this.emailService.createEmail(createEmailDto);
  }
}

