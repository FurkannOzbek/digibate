import { Controller, Get , Post, Body, BadRequestException, Logger} from '@nestjs/common';
import { AppService } from './app.service';
import { AskAiDto } from './dto/askAi.dto';

@Controller()
export class AppController {
  // Initilazing logger for logging messages
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}
 // Default endpoint to check if the server is running
  @Get()
  getHello(): string {
    
    return this.appService.getHello();
  }

  // AskAi endpoint to get AI response
  @Post('askAi')
  askAi(@Body() askAiDto: AskAiDto): {response: string} {
    if(!askAiDto.message) {
      throw new BadRequestException('Message should not be empty');}

      // Logging the received message and the current date
    this.logger.log(`Received message: [${askAiDto.message}] at [${new Date()}]`);
    return this.appService.askAi(askAiDto.message);
  }
}
