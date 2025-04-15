import { Component } from '@angular/core';
import { CardPanComponent } from "../card-pan/card-pan.component";
import { CategoryComponent } from "../category/category.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardPanComponent, CategoryComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
