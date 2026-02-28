import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../../service/products.sevice';
import { IProduct } from '../../interfaces/iproduct.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule], // ✔️ El FormsModule ya lo tenías importado correctamente
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  productService = inject(ProductsService);

  // NOTA: Eliminamos la variable 'newProduct' global porque 
  // ahora los datos nos los da directamente el formulario.

  // 3. Método para agregar un nuevo producto recibiendo el NgForm
  addProduct(productForm: NgForm) {
    // Extraemos los valores del formulario
    const valores = productForm.value;

    // Comprobamos que existan los datos y no sean 0 (además del .valid que comprueba los "required" del HTML)
    if (productForm.valid && valores.title !== "" && valores.price > 0 && valores.quantity > 0) {
      
      // Creamos el objeto basado en la interfaz IProduct
      const newProduct: IProduct = {
        title: valores.title,
        price: valores.price,
        quantity: valores.quantity
      };

      // Guardamos el producto
      const response = this.productService.insertProduct(newProduct);
      
      // Limpiamos los inputs del formulario automáticamente
      productForm.reset();

      console.log('Producto agregado:', response);
      console.log('Lista actualizada de productos:', this.productService.getAllProducts());
   
      Swal.fire({
        icon: 'success',
        title: '¡Producto añadido!',
        text: `Se ha guardado ${newProduct.title} correctamente`,
        showConfirmButton: false, 
        timer: 1500 
      });

    } else {
      // ALERTA DE ERROR
      Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: 'Por favor, rellena todos los campos correctamente.',
        confirmButtonColor: '#d33' 
      });    
    }
  }
}