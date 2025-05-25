import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  
  productService: ProductsService = inject(ProductsService);
  product: Product = {
    id_product: 0,
    product: '',
    price: 0,
    description: '',
    image_url: '',
    is_active: true,
    stock: 0,
    stock_min: 0,
    category: ''
  };
  isEditMode = false;

  constructor(){
    const id = this.route.snapshot.params['id_product'];
    if (id && !isNaN(+id)) {
      this.isEditMode = true;
      this.productService.getProductById(+id).then((p) => {
        if (p) this.product = p;
      });
    }
    
  
  }
  async saveProduct() {
    const id = this.route.snapshot.params['id_product'];
    if (this.isEditMode) {
      await this.productService.updateProduct(this.product, +id);
      alert('Producto actualizado exitosamente');
    } else {
      await this.productService.createProduct(this.product);
      alert('Producto creado exitosamente');
    }
  }
}
