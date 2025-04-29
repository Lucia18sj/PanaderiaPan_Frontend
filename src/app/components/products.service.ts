import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:3000/api/products';
  constructor() { }

  async getAllFeaturedProducts(): Promise<Product[]>{
    const data = await fetch(`${this.url}/getAllFeaturedProducts`);
    console.log(data);
    return (await data.json()) ?? [];
  }
  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(`${this.url}/getAllProducts`);
    const productsData = await data.json();  
    return productsData[0] ?? [];
  }

  async getProductById(id: number): Promise<Product> {
    const data = await fetch(`${this.url}/getProduct/${id}`);
    const productData = await data.json();
    return productData[0] ?? null;
  }
  
  async insertProduct(product: Product): Promise<void> {
    await fetch(`${this.url}/insertProduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
  }
  
  async updateProduct(product: Product): Promise<void> {
    await fetch(`${this.url}/updateProduct/${product.id_product}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
  }
  
  
}
