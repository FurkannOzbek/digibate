import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to Digibate Internship Task 1 API';
  }
  askAi(message: string): {response: string} {
  
    // Logic for check incoming request and generate response
    // For the task I will just returning static responses
    switch (message) {
      case "Promotional":
        return {
          response: `Ready to boost your brand awareness? Our new promotional campaign offers incredible value with eye-catching visuals and compelling copy that drives engagement. Get noticed with targeted messaging that speaks directly to your audience's needs and desires. Launch your promotion today and watch your metrics soar!` 
        };
      case "Product Launch":
        return {
          response: `Introducing our revolutionary new product! After months of development and testing, we're excited to bring this innovation to market. Designed with user needs in mind, it solves [key pain point] while offering unmatched quality and performance. Early adopters are already seeing amazing results. Be among the first to experience the future of [industry/category].` 
        };
      case "Get Engagement":
        return {
          response: `Want to spark meaningful conversations with your audience? Ask thought-provoking questions, share behind-the-scenes content, or create interactive polls. The key to engagement is providing value while inviting participation. Remember to respond promptly to comments and foster a sense of community. What's your favorite way to connect with customers?` 
        };
        case 'Announce a sale':
        return { 
          response: `FLASH SALE ALERT! For the next 48 hours only, enjoy incredible savings up to 50% off on our most popular items. This limited-time offer won't last long, so shop now before your favorites sell out! Use code SPECIAL25 at checkout for an extra 25% off your entire purchase. Free shipping on orders over $50!` 
        };

        default: 
        return { response: `This is an AI generated message with the given prompt : [${message}] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum nibh suscipit ipsum maximus auctor eget sed felis. Nunc massa ex, consectetur ac odio dictum, efficitur auctor velit. Nulla justo metus, semper non nunc a, porttitor tristique nibh. Aliquam vestibulum velit vitae elit pulvinar consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vel lacus sit amet sapien sagittis pretium. Nullam semper, orci a pharetra pretium, metus elit feugiat tellus, id gravida dolor dui eget neque. Nam blandit commodo dolor, a egestas lacus blandit a. Sed nec eros quis felis aliquam viverra.` };
  }
    }
}
