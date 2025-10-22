import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from './product.service';
import { RouterLink } from '@angular/router';
import { ProductsPresenter } from './product.presenter';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  imports: [CommonModule, RouterLink],
  providers: [ProductsPresenter],
})
export class ProductComponet {
  presenter = inject(ProductsPresenter);
}
