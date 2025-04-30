import { Controller, Get , Post, Body, BadRequestException} from '@nestjs/common';
import { AppService } from './app.service';
import { AskAiDto } from './dto/askAi.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('askAi')
  askAi(@Body() askAiDto: AskAiDto): string {
    if(!askAiDto.message) {
      throw new BadRequestException('Message should not be empty');}
    
    return this.appService.askAi(askAiDto.message);
  }
}
