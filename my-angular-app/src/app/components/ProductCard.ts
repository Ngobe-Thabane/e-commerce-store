import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col"
    >
      <!-- Product Image -->
      <img
        [src]="product.imageUrl"
        [alt]="product.name"
        class="w-full h-56 object-cover sm:h-64 md:h-72"
      />

      <!-- Product Details -->
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="text-lg font-semibold text-gray-800 mb-1">
          {{ product.name }}
        </h3>

        <p class="text-gray-500 text-sm flex-grow">
          {{ product.description }}
        </p>

        <div class="mt-3 flex items-center justify-between">
          <span class="text-blue-600 font-bold text-lg">
            {{ product.price | currency }}
          </span>

          <button
            (click)="addToCart()"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ProductCard {
  @Input() product!: {
    name: string  ;
    description: string;
    price: number;
    imageUrl: string;
  };

  addToCart() {
    alert(`${this.product.name} added to cart!`);
  }
}
