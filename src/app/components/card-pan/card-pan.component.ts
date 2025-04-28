import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-pan',
  imports: [RouterModule],
  templateUrl: './card-pan.component.html',
  styleUrl: './card-pan.component.css'
})
export class CardPanComponent {
  @Input() product!:Product;
}
