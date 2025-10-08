import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/Navigation';
import { ProductCard } from './components/ProductCard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, ProductCard],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular-app');
  product = {
    name: 'Sample Product',
    description: 'This is a sample product description.',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/300x200', // Placeholder image URL
  };
}
