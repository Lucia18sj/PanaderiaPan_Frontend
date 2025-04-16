import { Component } from '@angular/core';
import { CardPanComponent } from "../card-pan/card-pan.component";
import { CategoryComponent } from "../category/category.component";

@Component({
  selector: 'app-products',
  imports: [CardPanComponent, CategoryComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
