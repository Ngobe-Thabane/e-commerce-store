import { Routes } from '@angular/router';
import { AuthForm } from './components/AuthForm';
import { HomePage } from './components/HomePage';

export const routes: Routes = [
  {path: '', component: HomePage },
  { path: 'login', component: AuthForm },
];
