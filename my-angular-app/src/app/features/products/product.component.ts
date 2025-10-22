import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from './service/product.service';
import { RouterLink } from '@angular/router';
import { ProductsPresenter } from './presenter/product.presenter';

@Component({
  selector: 'app-product',
  templateUrl: './view/product.component.html',
  imports: [CommonModule, RouterLink],
  providers: [ProductsPresenter],
})
export class ProductComponet {
  presenter = inject(ProductsPresenter);
}
