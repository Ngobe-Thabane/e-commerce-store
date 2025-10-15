import { effect, inject, Injectable, signal } from "@angular/core";
import { ProductService } from "../service/product.service";
import { Product } from "../model/product.model";

@Injectable()
export class ProductDetailPresenter {

  productService = inject(ProductService);
  product = signal<Product|null>(null)


  loadProductById(id: string) {
    this.productService.loadProductById(id);
    this.product.set(this.productService.slectedProduct());
  };
  
}