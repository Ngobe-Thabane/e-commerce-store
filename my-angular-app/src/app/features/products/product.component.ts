import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductService } from './service/product.service';
import { RouterLink } from '@angular/router';
import { ProductsPresenter } from './presenter/product.presenter';

@Component({
  selector: 'app-product',
  templateUrl: './view/product.component.html',
  imports: [CommonModule, RouterLink],
  providers: [ProductsPresenter, ProductService],
})

export class ProductComponet {
  presenter = inject(ProductsPresenter);

  constructor() {
    this.presenter.loadProducts();
  }
}
