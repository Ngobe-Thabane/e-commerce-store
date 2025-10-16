import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../enviroment';
import { catchError, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private http = inject(HttpClient);
  private BASE_URL = environment.apiUrl;

  products = signal<Product[]>([]);
  slectedProduct = signal<Product | null>(null);

  loadProductById(id:string){
    const product = this.products().find(p=>p.id === id) || null;
    this.slectedProduct.set(product);
  }


  loadProducts() {
    return this.http.get<Product[]>(`${this.BASE_URL}/products`).pipe(
      catchError((error) => {

        const mockProducts: Product[] = [
          {
            id: '1',
            name: 'Wireless Headphones',
            description: 'Noise-cancelling, Bluetooth 5.0',
            price: 120,
            imageUrl:
              'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=400&q=60',
          },
          {
            id: '2',
            name: 'Smart Watch',
            description: 'Track your fitness goals',
            price: 89,
            imageUrl:
              'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=400&q=60',
          },
          {
            id: '3',
            name: 'Laptop Backpack',
            description: 'Stylish and water-resistant',
            price: 60,
            imageUrl:
              'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=400&q=60',
          },
          {
            id: '4',
            name: 'Mechanical Keyboard',
            description: 'RGB backlit, tactile keys',
            price: 75,
            imageUrl:
              'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=fGormat&fit=crop&w=400&q=60',
          },
        ];
        this.products.set(mockProducts);
        return of(mockProducts).pipe(delay(500)); // simulate API delay
      })
    );
  }
  
}
