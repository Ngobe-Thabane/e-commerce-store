import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { ProductsPresenter } from "./product.presenter";
import { ProductService } from "./product.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    imports: [CommonModule, RouterLink],
    providers: [ProductsPresenter, ProductService]
})
export class ProductComponet{

    presenter = inject(ProductsPresenter);

    constructor(){
        this.presenter.loadProducts();
    }
}