import { inject, Injectable, signal } from '@angular/core';
import { Product } from './model/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../enviroment';
import { catchError, delay, of } from 'rxjs';
import { products } from './model/products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private BASE_URL = environment.apiUrl;

  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);
  slectedProduct = signal<Product | null>(null);

  error = signal<string | null>(null);

  loadProductById(id: string) {
    
    this.http.get<Product>(`${this.BASE_URL}/products/${id}`)
    .pipe(catchError((error)=>{
      const prod = products.find(p=>p.id === id) || null;
      return of(prod).pipe(delay(500));
    }))
    .subscribe({
      next:(product)=>{
          this.slectedProduct.set(product);
      },
      error: (err)=>{
        this.error.set("Could not load product");
      }
    })
  }

  loadProducts() {
    this.isLoading.set(true);
    return this.http
      .get<Product[]>(`${this.BASE_URL}/products`)
      .pipe(
        catchError((error) => {
          this.products.set(products);
          return of(products).pipe(delay(500));
        })
      )
      .subscribe({
        next: (products) => {
          this.products.set(products);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load products.');
          this.isLoading.set(false);
        },
      });
  }
}
