import { Component, inject, signal } from '@angular/core';
import { ProductService } from './service/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsPresenter } from './presenter/product.presenter';

@Component({
  selector: 'app-product-detail',
  templateUrl: './view/product-detail.view.html',
  providers: [ProductService, ProductsPresenter],
})
export class ProductDetailComponent {
  productPresenter = inject(ProductsPresenter);
  route = inject(ActivatedRoute);
  product = {
            id: '1',
            name: 'Wireless Headphones',
            description: 'Noise-cancelling, Bluetooth 5.0',
            price: 120,
            imageUrl:
              'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=400&q=60',
          }


}
