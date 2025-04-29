import { Component, inject } from '@angular/core';
import { CardPanComponent } from "../card-pan/card-pan.component";
import { CategoryComponent } from "../category/category.component";
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [CardPanComponent, CategoryComponent, CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [];
  filterProducts: Product[] = [];
  productsService = inject(ProductsService);
  route = inject(ActivatedRoute);

  constructor(){
    this.productsService.getAllProducts().then(
      (products:Product[]) =>{
        this.products = products;
        this.filterProducts = products;
      }
    )
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const category = params['category'];
      this.filterByCategory(category);
    });
  }
  filterByCategory(categoryOrName: string) {
    if (!categoryOrName || categoryOrName.toLowerCase() === 'all') {
      this.filterProducts = this.products;
      return;
    }
  
    const text = categoryOrName.toLowerCase();
  
    this.filterProducts = this.products.filter((product) =>
      product.category.toLowerCase() === text ||
      product.product.toLowerCase().includes(text)
    );
  }
  
}
