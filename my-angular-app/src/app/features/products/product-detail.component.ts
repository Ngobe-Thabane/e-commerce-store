import { Component, inject } from "@angular/core";
import { ProductsPresenter } from "./product.presenter";
import { ProductService } from "./product.service";


@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.view.html",
  providers: [ProductService, ProductsPresenter]

})

export class ProductDetailComponent{
  productPresenter = inject(ProductsPresenter);

  constructor(){
    console.log(this.productPresenter.products);
  }
}