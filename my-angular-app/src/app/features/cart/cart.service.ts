import { Injectable, signal } from '@angular/core';
import { CartItem } from '../products/model/cart-item.model';
import { Product } from '../products/model/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems = signal<CartItem[]>([]);

  addItem(product: Product) {
    const current = this.cartItems();

    const existing = current.find((c) => c.product.id === product.id);

    if (existing) {
      existing.quantity += 1;
      existing.totalPrice = existing.quantity * existing.product.price;
    } else {
      current.push({ product, quantity: 1, totalPrice: product.price });
    }

    this.cartItems.set([...current]);
  }

  removeItem(productId: string) {
    this.cartItems.set(this.cartItems().filter((c) => c.product.id !== productId));
  }

  clearCart() {
    this.cartItems.set([]);
  }

  getTotal() {
    return this.cartItems().reduce((sum, c) => sum + c.totalPrice, 0);
  }
}
