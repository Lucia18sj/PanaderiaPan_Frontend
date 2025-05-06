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

  async getProductById(id: number): Promise<Product | null> {
    const data = await fetch(`${this.url}/getProductById/${id}`);
    const productData = await data.json();
    console.log('Service result:', productData);
    return productData ?? null; 
  }
  
  async createProduct(product: Product): Promise<any> {
    const response = await fetch(`${this.url}/insertProduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
  
    return await response.json();
  }
  
  async updateProduct(product: Product, id: number): Promise<any> {
    const response = await fetch(`${this.url}/updateProduct/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
  
    return await response.json();
  }
  
  
}
