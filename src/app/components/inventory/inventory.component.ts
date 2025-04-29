import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import   { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-inventory',
  imports: [CommonModule, RouterModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  productService: ProductsService = inject(ProductsService);

  getAllProducts: Product[] = [];

  constructor() {
    this.productService.getAllProducts().then(
      (getAllProducts: Product[]) => {
        this.getAllProducts = getAllProducts;
      }
    );

  }

  

}
