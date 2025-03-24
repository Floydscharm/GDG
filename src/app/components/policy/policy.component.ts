import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Policy {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  lastUpdated: Date;
  rules: PolicyRule[];
}

interface PolicyRule {
  id: string;
  condition: string;
  action: string;
  severity: 'low' | 'medium' | 'high';
}

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="policy-container">
      <h2>Policy Management</h2>

      <div class="policies-list">
        <div *ngFor="let policy of policies" class="policy-card">
          <div class="policy-header">
            <div>
              <h3>{{policy.name}}</h3>
              <p class="last-updated">Last updated: {{policy.lastUpdated | date}}</p>
            </div>
            <label class="switch">
              <input 
                type="checkbox" 
                [checked]="policy.isActive"
                (change)="togglePolicy(policy)"
              >
              <span class="slider"></span>
            </label>
          </div>

          <p class="description">{{policy.description}}</p>

          <div class="rules-section">
            <h4>Rules</h4>
            <div class="rules-list">
              <div *ngFor="let rule of policy.rules" class="rule-item">
                <div class="rule-header">
                  <span class="severity-badge" [class]="rule.severity">
                    {{rule.severity}}
                  </span>
                </div>
                <p><strong>If:</strong> {{rule.condition}}</p>
                <p><strong>Then:</strong> {{rule.action}}</p>
              </div>
            </div>
          </div>

          <div class="policy-actions">
            <button (click)="editPolicy(policy)">Edit Policy</button>
            <button class="secondary" (click)="viewHistory(policy)">View History</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .policy-container {
      padding: 2rem;
    }

    .policies-list {
      display: grid;
      gap: 1.5rem;
    }

    .policy-card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .policy-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .last-updated {
      font-size: 0.875rem;
      color: #666;
    }

    .description {
      margin-bottom: 1.5rem;
      color: #4b5563;
    }

    .rules-section {
      margin-top: 1.5rem;
    }

    .rules-list {
      display: grid;
      gap: 1rem;
      margin-top: 1rem;
    }

    .rule-item {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 6px;
    }

    .rule-header {
      margin-bottom: 0.5rem;
    }

    .severity-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .low {
      background: #dbeafe;
      color: #1e40af;
    }

    .medium {
      background: #fef3c7;
      color: #92400e;
    }

    .high {
      background: #fee2e2;
      color: #991b1b;
    }

    .policy-actions {
      margin-top: 1.5rem;
      display: flex;
      gap: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background: #764ba2;
      color: white;
    }

    button.secondary {
      background: transparent;
      border: 1px solid #764ba2;
      color: #764ba2;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: #764ba2;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  `]
})
export class PolicyComponent {
  policies: Policy[] = [
    {
      id: '1',
      name: 'Content Filtering Policy',
      description: 'Automatically filter and flag inappropriate content based on defined rules',
      isActive: true,
      lastUpdated: new Date(),
      rules: [
        {
          id: '1',
          condition: 'Content contains prohibited keywords',
          action: 'Automatically reject and notify moderator',
          severity: 'high'
        },
        {
          id: '2',
          condition: 'User posts more than 10 times per minute',
          action: 'Flag for review',
          severity: 'medium'
        }
      ]
    }
    // Add more mock policies here
  ];

  togglePolicy(policy: Policy): void {
    policy.isActive = !policy.isActive;
    // In a real app, you would save this to the backend
  }

  editPolicy(policy: Policy): void {
    // Implement policy editing logic
    console.log('Editing policy:', policy.id);
  }

  viewHistory(policy: Policy): void {
    // Implement policy history view logic
    console.log('Viewing history for policy:', policy.id);
  }
}