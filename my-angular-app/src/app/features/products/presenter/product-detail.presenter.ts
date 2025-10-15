import { inject, Injectable } from "@angular/core";
import { ProductService } from "../service/product.service";

@Injectable()
export class ProductDetailPresenter {

  productService = inject(ProductService);

  loadProductById(id: string) {
    
  };
  
}