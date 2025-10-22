import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartPresenter } from './cart.presenter';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.view.html',
  providers: [CartPresenter],
})
export class CartComponent {
  presenter = inject(CartPresenter);
}
