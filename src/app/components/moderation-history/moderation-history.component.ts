import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ModerationAction {
  id: string;
  contentId: string;
  action: 'approve' | 'reject';
  reason?: string;
  moderator: string;
  timestamp: Date;
  contentType: string;
  contentTitle: string;
}

@Component({
  selector: 'app-moderation-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="history-container">
      <h2>Moderation History</h2>

      <div class="filters">
        <input 
          type="text" 
          [(ngModel)]="searchTerm" 
          placeholder="Search by content title..."
          (input)="filterHistory()"
        >
        
        <div class="date-filters">
          <input 
            type="date" 
            [(ngModel)]="startDate"
            (change)="filterHistory()"
          >
          <span>to</span>
          <input 
            type="date" 
            [(ngModel)]="endDate"
            (change)="filterHistory()"
          >
        </div>
      </div>

      <div class="history-list">
        <div *ngFor="let action of filteredHistory" class="history-item">
          <div class="action-header">
            <h3>{{action.contentTitle}}</h3>
            <span class="badge" [class]="action.action">
              {{action.action}}
            </span>
          </div>

          <div class="action-details">
            <p>
              <strong>Moderator:</strong> {{action.moderator}}
            </p>
            <p>
              <strong>Date:</strong> {{action.timestamp | date:'medium'}}
            </p>
            <p>
              <strong>Content Type:</strong> {{action.contentType}}
            </p>
            <p *ngIf="action.reason">
              <strong>Reason:</strong> {{action.reason}}
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .history-container {
      padding: 2rem;
    }

    .filters {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    input[type="text"] {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      min-width: 300px;
    }

    .date-filters {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    input[type="date"] {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .history-list {
      display: grid;
      gap: 1.5rem;
    }

    .history-item {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .action-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .badge {
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .approve {
      background: #dcfce7;
      color: #166534;
    }

    .reject {
      background: #fee2e2;
      color: #991b1b;
    }

    .action-details {
      font-size: 0.875rem;
      line-height: 1.6;
    }

    .action-details p {
      margin-bottom: 0.5rem;
    }
  `]
})
export class ModerationHistoryComponent {
  searchTerm: string = '';
  startDate: string = '';
  endDate: string = '';

  history: ModerationAction[] = [
    {
      id: '1',
      contentId: '123',
      action: 'approve',
      moderator: 'John Doe',
      timestamp: new Date(),
      contentType: 'post',
      contentTitle: 'Summer Campaign Post'
    },
    // Add more mock history items here
  ];

  filteredHistory: ModerationAction[] = this.history;

  filterHistory(): void {
    this.filteredHistory = this.history.filter(item => {
      const matchesSearch = !this.searchTerm || 
        item.contentTitle.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesDateRange = this.isWithinDateRange(item.timestamp);
      
      return matchesSearch && matchesDateRange;
    });
  }

  private isWithinDateRange(date: Date): boolean {
    if (!this.startDate && !this.endDate) return true;
    
    const itemDate = new Date(date).getTime();
    const start = this.startDate ? new Date(this.startDate).getTime() : -Infinity;
    const end = this.endDate ? new Date(this.endDate).getTime() : Infinity;
    
    return itemDate >= start && itemDate <= end;
  }
}