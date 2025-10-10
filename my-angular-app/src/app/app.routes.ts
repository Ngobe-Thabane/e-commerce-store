import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './core/shared/home.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path: 'login', component: AuthComponent },
];
