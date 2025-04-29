import { Component, inject } from '@angular/core';
import { CardPanComponent } from "../card-pan/card-pan.component";
import { CategoryComponent } from "../category/category.component";
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CardPanComponent, CategoryComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productService: ProductsService = inject(ProductsService);
  router = inject(Router);
  getAllFeaturedProductsList : Product[] = [];


  constructor(){
    this.productService.getAllFeaturedProducts().then(
      (getAllFeaturedProductsList: Product[]) =>{
        this.getAllFeaturedProductsList = getAllFeaturedProductsList;
      }
    );
    

  }
}
