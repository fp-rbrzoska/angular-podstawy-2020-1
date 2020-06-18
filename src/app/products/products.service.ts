import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products: Product[] = [
    { id: '1', name: 'prod1', description: 'prod descr 1', price: 1.99, category: 'cat1' },
    { id: '2', name: 'prod2', description: 'prod descr 2', price: 2.99, category: 'cat2' }
  ]
  constructor() { }

  getAllProducts() {
    return this._products;
  }
}
