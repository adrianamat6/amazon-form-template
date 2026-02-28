import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.sevice';
import { IProduct } from '../../interfaces/iproduct.interface';
import { inject } from '@angular/core';

@Component({
  selector: 'app-total-cart',
  imports: [],
  templateUrl: './total-cart.html',
  styleUrl: './total-cart.css',
})
export class TotalCart {
   productsService = inject(ProductsService);

    getTotalPrice(): number {
    return this.productsService.calculateTotalPrice();
    }; 


}
