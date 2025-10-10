import { inject, signal } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

export class ProductsPresenter{

    
    private productService = inject(ProductService);
    products = signal<Product[]>([]);
    isLoading = signal<boolean>(false);
    error = signal<string|null>(null);
    
    loadProducts(){

        this.isLoading.set(true);

        this.productService.loadProducts().subscribe({
            next: (products)=>{
                this.products.set(products);
                this.isLoading.set(false);
            },
            error:(err)=>{
                this.error.set('Failed to load products.');
                this.isLoading.set(false);
            }
        })
    }
}