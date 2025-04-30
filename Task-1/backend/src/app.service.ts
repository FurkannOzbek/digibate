import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Digibate Internship Task 1 API';
  }
  askAi(message: string): string {
    return `AI response to: ${message}`;
  }
}
