import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; 
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [ MatButtonModule,MatIconModule,FormsModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  promptInput= "";
  isLoading = false;
  result = "";

   constructor(private apiService: ApiService) { } 
   generateTopic() {
    if(!this.promptInput.trim()) return;
    this.isLoading = true;
    this.apiService.generateContent(this.promptInput).subscribe({
      next: (response) => {
        this.result = response;
        console.log("Generated content:", this.result);
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error generating content:", error);
        this.isLoading = false;
      }
     });
   }
}
