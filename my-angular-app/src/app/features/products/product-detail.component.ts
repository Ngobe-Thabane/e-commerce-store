import { Component, inject } from '@angular/core';
import { ProductService } from './service/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailPresenter } from './presenter/product-detail.presenter';

@Component({
  selector: 'app-product-detail',
  templateUrl: './view/product-detail.view.html',
  providers: [ProductDetailPresenter],
})
export class ProductDetailComponent {
  productPresenter = inject(ProductDetailPresenter);
  route = inject(ActivatedRoute);
  
  constructor() {
    const productId = this.route.snapshot.paramMap.get('id') || ''
    this.productPresenter.setProductId(productId);
  }
}
