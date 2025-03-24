import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(email: string, password: string): boolean {
    // Implement actual authentication logic here
    this.isAuthenticatedSubject.next(true);
    return true;
  }

  signup(email: string, password: string): boolean {
    // Implement actual signup logic here
    return true;
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}