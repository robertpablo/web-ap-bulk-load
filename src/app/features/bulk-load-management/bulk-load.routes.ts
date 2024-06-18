import { Routes } from '@angular/router';
import { BulkLoadListComponent } from './pages/bulk-load-list/container/bulk-load-list.component';
import { BulkLoadCreateComponent } from './pages/bulk-load-create/container/bulk-load-create.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: BulkLoadListComponent },
  { path: 'add', component: BulkLoadCreateComponent },
  { path: '**', redirectTo: 'list' },
];
