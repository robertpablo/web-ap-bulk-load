import { Routes } from '@angular/router';
import { ROUTES as BULKLOAD_ROUTES } from './features/bulk-load-management/bulk-load.routes';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '', children: BULKLOAD_ROUTES },
  { path: '**', redirectTo: '' },
];
