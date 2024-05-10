import { Routes } from '@angular/router';
import { BulkLoadListComponent } from './pages/bulk-load-list/container/bulk-load-list.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: BulkLoadListComponent },
  { path: '**', redirectTo: 'list' },
];
