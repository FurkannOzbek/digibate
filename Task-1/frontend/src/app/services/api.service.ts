import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  generateContent(message: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/askAi`, { message });
  }
}
