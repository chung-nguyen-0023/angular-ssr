import { Component } from '@angular/core';
import productsData from '../assets/products.json';

interface Product {
  id: Number;
  name: String;
  image: String;
  price: String;
  priceOld: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ssr';
  products: Product[] = productsData;
}
