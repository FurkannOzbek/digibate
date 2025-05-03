import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypingAnimationService {
  /**
   * Simulates typing animation on a string
   * @param text The full text to be animated
   * @param speed The typing speed in milliseconds per character
   * @returns An Observable that emits the progressively typed text
   */
  typeText(text: string, speed: number = 30): Observable<string> {
    const subject = new Subject<string>();
    let displayedText = '';
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex < text.length) {
        displayedText += text.charAt(charIndex);
        charIndex++;
        subject.next(displayedText);
      } else {
        clearInterval(typingInterval);
        subject.complete();
      }
    }, speed);
    
    return subject.asObservable();
  }
}
