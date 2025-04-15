import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://192.168.1.182:3000/api/products';
  constructor() { }

  async getAllFeaturedProducts(): Promise<Product[]>{
    const data = await fetch(`${this.url}/getAllFeaturedProducts`);
    console.log(data);
    return (await data.json()) ?? [];
  }

  async getProductsForCategory(category: string): Promise<Product[]> {
    const data = await fetch(`${this.url}/getProductsfoCategory/${category}`);
    const productsData = await data.json();  
    return productsData[0] ?? [];
  }
}
