import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-container">
      <nav class="sidebar">
        <div class="nav-header">
          <h3>Admin Dashboard</h3>
        </div>
        <ul class="nav-items">
          <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
          <li><a routerLink="/content-review" routerLinkActive="active">Content Review</a></li>
          <li><a routerLink="/moderation-history" routerLinkActive="active">Moderation History</a></li>
          <li><a routerLink="/policy" routerLinkActive="active">Policy Management</a></li>
          <li><a routerLink="/setup" routerLinkActive="active">Setup</a></li>
        </ul>
      </nav>
      <main class="main-content">
        <div class="stats-grid">
          <div class="stat-card">
            <h4>Total Users</h4>
            <p>1,234</p>
          </div>
          <div class="stat-card">
            <h4>Active Sessions</h4>
            <p>456</p>
          </div>
          <div class="stat-card">
            <h4>Content Items</h4>
            <p>789</p>
          </div>
        </div>
        <div class="chart-container">
          <!-- Chart will be added here -->
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard-container {
      display: flex;
      height: 100vh;
    }
    .sidebar {
      width: 250px;
      background: #2c3e50;
      color: white;
      padding: 1rem;
    }
    .nav-header {
      padding: 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .nav-items {
      list-style: none;
      padding: 0;
    }
    .nav-items li a {
      display: block;
      padding: 0.8rem 1rem;
      color: white;
      text-decoration: none;
      transition: background 0.3s;
    }
    .nav-items li a:hover {
      background: rgba(255,255,255,0.1);
    }
    .main-content {
      flex: 1;
      padding: 2rem;
      background: #f5f5f5;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    // Initialize charts and load data
  }
}