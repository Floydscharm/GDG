import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
  content: string;
}

@Component({
  selector: 'app-content-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="content-review-container">
      <h2>Content Review</h2>
      
      <div class="filters">
        <select [(ngModel)]="selectedStatus" (change)="filterContent()">
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
        
        <select [(ngModel)]="selectedType" (change)="filterContent()">
          <option value="all">All Types</option>
          <option value="post">Posts</option>
          <option value="comment">Comments</option>
          <option value="image">Images</option>
        </select>
      </div>

      <div class="content-list">
        <div *ngFor="let item of filteredContent" class="content-item">
          <div class="content-header">
            <h3>{{item.title}}</h3>
            <span class="badge" [class]="item.status">{{item.status}}</span>
          </div>
          
          <div class="content-details">
            <p>Type: {{item.type}}</p>
            <p>Submitted: {{item.submittedAt | date:'medium'}}</p>
          </div>
          
          <div class="content-body">
            <p>{{item.content}}</p>
          </div>
          
          <div class="action-buttons" *ngIf="item.status === 'pending'">
            <button class="approve" (click)="approveContent(item)">Approve</button>
            <button class="reject" (click)="rejectContent(item)">Reject</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .content-review-container {
      padding: 2rem;
    }

    .filters {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    select {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      min-width: 150px;
    }

    .content-list {
      display: grid;
      gap: 1.5rem;
    }

    .content-item {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .content-header {
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

    .pending {
      background: #fef3c7;
      color: #92400e;
    }

    .approved {
      background: #dcfce7;
      color: #166534;
    }

    .rejected {
      background: #fee2e2;
      color: #991b1b;
    }

    .content-details {
      font-size: 0.875rem;
      color: #666;
      margin-bottom: 1rem;
    }

    .content-body {
      margin-bottom: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 4px;
    }

    .action-buttons {
      display: flex;
      gap: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
    }

    button.approve {
      background: #10b981;
      color: white;
    }

    button.reject {
      background: #ef4444;
      color: white;
    }
  `]
})
export class ContentReviewComponent {
  selectedStatus: string = 'all';
  selectedType: string = 'all';
  
  content: ContentItem[] = [
    {
      id: '1',
      title: 'New Blog Post',
      type: 'post',
      status: 'pending',
      submittedAt: new Date(),
      content: 'This is a sample blog post content that needs review...'
    },
    // Add more mock content items here
  ];

  filteredContent: ContentItem[] = this.content;

  filterContent(): void {
    this.filteredContent = this.content.filter(item => {
      const statusMatch = this.selectedStatus === 'all' || item.status === this.selectedStatus;
      const typeMatch = this.selectedType === 'all' || item.type === this.selectedType;
      return statusMatch && typeMatch;
    });
  }

  approveContent(item: ContentItem): void {
    item.status = 'approved';
  }

  rejectContent(item: ContentItem): void {
    item.status = 'rejected';
  }
}