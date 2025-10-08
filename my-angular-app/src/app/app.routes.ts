import { Routes } from '@angular/router';
import { AuthForm } from './components/AuthForm';
import { App } from './app';

export const routes: Routes = [
  {path: '', component: App },
  { path: 'login', component: AuthForm },
];
