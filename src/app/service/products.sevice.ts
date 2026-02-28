import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';
import { PRODUCTS } from '../db/products.db';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products:IProduct[] = PRODUCTS;
  private id: number = 16;

  getAllProducts(): IProduct[] {
    return this.products;
  }


  insertProduct(newProduct: IProduct): string {
    newProduct.id = this.id;
     this.products.push(newProduct);
     this.id++;
      return 'Producto agregado correctamente';
  }; 

  calculateTotalPrice(): number {
    return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
  }
  ; 

}
