import { Component } from '@angular/core';
import { input } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  miProducto = input<IProduct>();


}
