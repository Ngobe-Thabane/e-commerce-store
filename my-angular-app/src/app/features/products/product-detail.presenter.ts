import { effect, inject, Injectable, signal } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/product.model';
import { CartService } from '../cart/cart.service';

@Injectable()
export class ProductDetailPresenter {
  productService = inject(ProductService);
  cartService = inject(CartService);

  id = signal<string | null>(null);

  constructor() {
    effect(() => {
      const products = this.productService.products();
      const currentId = this.id();
      if (products.length > 0 && currentId) {
        {
          this.productService.loadProductById(currentId);
        }
      }
    });
  }

  addProductToCart(product: Product) {
    console.log('Adding product to cart:', product);
    this.cartService.addItem(product);
  }

  setProductId(id: string) {
    this.id.set(id);
  }

  loadProductById(id: string) {
    this.productService.loadProductById(id);
  }

  product() {
    return this.productService.slectedProduct();
  }
}
