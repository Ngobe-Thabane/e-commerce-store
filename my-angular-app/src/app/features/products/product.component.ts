import { CommonModule } from "@angular/common";
import { Component, inject, signal } from "@angular/core";
import { ProductsPresenter } from "./product.presenter";
import { ProductService } from "./product.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    imports: [CommonModule],
    providers: [ProductsPresenter, ProductService]
})
export class ProductComponet{

    presenter = inject(ProductsPresenter);

    constructor(){
        this.presenter.loadProducts();
    }
}