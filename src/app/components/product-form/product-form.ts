import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../service/products.sevice';
import { inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  productService = inject(ProductsService);

  // 2. Variables para el formulario (Two-way binding)
  newProduct: IProduct = {
    id: 0,
    title: "",
    price: 0,
    quantity: 0
  }; 

  // 3. Método para agregar un nuevo producto
  addProduct() {
    if (this.newProduct.title !=="" && this.newProduct.price !== 0 && this.newProduct.quantity !== 0) {
      const response = this.productService.insertProduct(this.newProduct);
      
      this.newProduct = {title: "",price: 0,quantity: 0};

      console.log('Producto agregado:', response);
      console.log('Lista actualizada de productos:', this.productService.getAllProducts());
   
      Swal.fire({
        icon: 'success',
        title: '¡Producto añadido!',
        text: `Se ha guardado ${this.newProduct.title} correctamente`,
        showConfirmButton: false, // Sin botón
        timer: 1500 // Se cierra sola en 1.5 seg
      });


    } else{
        // ALERTA DE ERROR
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: 'Por favor, rellena todos los campos correctamente.',
          confirmButtonColor: '#d33' // Color rojo
        });    
      }
  }; 


}