import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CardPanComponent } from "../card-pan/card-pan.component";
import { CategoryComponent } from "../category/category.component";
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [CardPanComponent, CategoryComponent, CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private routeSub: Subscription | undefined;
  products: Product[] = [];
  category: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    // Subscripción a los parámetros de la ruta para detectar el cambio de categoría
    this.routeSub = this.route.params.subscribe((params) => {
      this.category = params['category']; // Obtener la categoría de la URL
      console.log(`Category: ${this.category}`);
      this.fetchProductsForCategory(this.category); // Llamar al servicio para obtener los productos
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe(); // Desuscribirse para evitar fugas de memoria
    }
  }

  fetchProductsForCategory(category: string) {
    this.productService.getProductsForCategory(category).then((products) => {
      this.products = products;
      console.log('Fetched products:', products);
    });
  }
}
