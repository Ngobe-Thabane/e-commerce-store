import { inject, Injectable, signal } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsPresenter {
  productService = inject(ProductService);

  constructor() {
    this.productService.loadProducts();
  }

  products() {
    return this.productService.products();
  }

  isLoading() {
    return this.productService.isLoading();
  }

  error() {
    return this.productService.error();
  }
}
