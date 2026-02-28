import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { ProductsService } from '../../service/products.sevice';
import { inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import { signal } from '@angular/core';


@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  private ProductsService = inject(ProductsService);
  misProductos = signal<IProduct[]>([]); 

  ngOnInit(): void {
    // Llamamos al método del servicio para obetener los productos
    const datos = this.ProductsService.getAllProducts();
    
    // Guardamos los datos en nuestro signal local
    this.misProductos.set(datos);

    console.log('Productos obtenidos del servicio:', this.misProductos());
  }; 

}
