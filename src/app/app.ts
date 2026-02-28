import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductForm } from './components/product-form/product-form';
import { ProductList } from './components/product-list/product-list';
import { TotalCart } from './components/total-cart/total-cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductForm, ProductList, TotalCart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {



}
