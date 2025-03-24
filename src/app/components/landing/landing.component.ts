import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="landing-container">
      <h1>Welcome to Admin Dashboard</h1>
      <div class="cta-buttons">
        <button (click)="navigate('login')">Sign In</button>
        <button (click)="navigate('signup')">Sign Up</button>
      </div>
    </div>
  `,
  styles: [`
    .landing-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .cta-buttons {
      margin-top: 2rem;
    }
    button {
      margin: 0 1rem;
      padding: 0.8rem 2rem;
      border: none;
      border-radius: 4px;
      background: white;
      color: #764ba2;
      cursor: pointer;
      font-size: 1.1rem;
    }
  `]
})
export class LandingComponent {
  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}