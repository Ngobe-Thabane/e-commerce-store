
import { effect, inject, Injectable, signal } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from '../products/model/cart-item.model';

@Injectable()
export class CartPresenter {
  private cartService = inject(CartService);

  items = signal<CartItem[]>([]);
  total = signal<number>(0);

  constructor() {
    effect(()=>{
      this.loadCart();
    })
  }

  loadCart() {
    this.items.set(this.cartService.cartItems());
    this.total.set(this.cartService.getTotal());
  }

  removeItem(id: string) {
    this.cartService.removeItem(id);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }
}
