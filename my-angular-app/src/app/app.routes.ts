import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './core/shared/home.component';
import { ProductComponet } from './features/products/product.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path: 'login', component: AuthComponent },
    {
      path: 'products', component: ProductComponet
    },
];
