import { Routes } from '@angular/router';
import { HttpComponent } from './httptest/httptest.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'httptest', component: HttpComponent }
];

