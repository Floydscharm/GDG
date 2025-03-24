import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SetupComponent } from './components/setup/setup.component';
import { ContentReviewComponent } from './components/content-review/content-review.component';
import { ModerationHistoryComponent } from './components/moderation-history/moderation-history.component';
import { PolicyComponent } from './components/policy/policy.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'content-review', component: ContentReviewComponent },
  { path: 'moderation-history', component: ModerationHistoryComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'setup', component: SetupComponent },
  { path: '**', redirectTo: '' }
];