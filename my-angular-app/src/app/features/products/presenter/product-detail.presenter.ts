import { effect, inject, Injectable, signal } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';

@Injectable()
export class ProductDetailPresenter {
  productService = inject(ProductService);
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
