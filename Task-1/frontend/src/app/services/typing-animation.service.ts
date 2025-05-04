import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypingAnimationService {
  private typingIntervalId: any;
  private activeSubject: Subject<string> | null = null;

  typeText(text: string, speed: number = 130): Observable<string> {
    // First stop any ongoing typing animation
    this.stopTyping();
    
    const subject = new Subject<string>();
    this.activeSubject = subject;
    let displayedText = '';
    let charIndex = 0;
    
    this.typingIntervalId = setInterval(() => {
      if (charIndex < text.length) {
        displayedText += text.charAt(charIndex);
        charIndex++;
        subject.next(displayedText);
      } else {
        clearInterval(this.typingIntervalId);
        this.typingIntervalId = null;
        this.activeSubject = null;
        subject.complete();
      }
    }, speed);
    
    return subject.asObservable();
  }
// Method for stop the typing animation in case ''Create from scratch'' button is clicked or the user wants to generate a new text
  stopTyping(): void {
    if (this.typingIntervalId) {
      clearInterval(this.typingIntervalId);
      this.typingIntervalId = null;
    }
    
    if (this.activeSubject) {
      this.activeSubject.complete();
      this.activeSubject = null;
    }
  }
}