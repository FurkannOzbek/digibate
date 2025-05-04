import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; 
import { ApiService } from '../services/api.service';
import { TypingAnimationService } from '../services/typing-animation.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, FormsModule, CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  promptInput= "";
  isLoading = false;
  result = "";
  isTyping = false;

   constructor(
    private apiService: ApiService,
    private typingService: TypingAnimationService
  ) { } 

  // Method for reset everything
  resetForm(){if (this.isTyping) {
    this.typingService.stopTyping();
  }
    this.isTyping = false;
    this.isLoading = false;
    this.promptInput = "";
    this.result = "";
  }

  // Method for the main generate button using text input
  generateTopic() {
    if(!this.promptInput.trim()) return;
    this.generateContent(this.promptInput);
  }

  // Method for predefined suggestion buttons
  generateFromSuggestion(suggestionType: string) {
    this.generateContent(suggestionType);
  }

  // Common method to handle API calls and response processing
  private generateContent(message: string) {
    this.isLoading = true;
    this.result = "";

    this.apiService.generateContent(message).subscribe({
      next: (response) => {
        this.isTyping = true;
        // Starting the typing animation
        this.typingService.typeText(response.response, 30).subscribe({
          next: (partialText) => {
            this.result = partialText;
          },
          complete: () => {
            this.isTyping = false;
            this.isLoading = false;
          }
        });
      },
      error: (error) => {
        console.error("Error generating content:", error);
        this.isLoading = false;
      }
    });
  }
}
