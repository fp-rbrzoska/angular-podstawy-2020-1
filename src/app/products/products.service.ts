import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _productsSubj = new BehaviorSubject<Product[]>(null);
  products$ = this._productsSubj.asObservable();

  constructor(private http: HttpClient) { }

  refreshProducts(queryFilter = '') {
    return this.http.get<Product[]>('http://localhost:3000/products', {
      params: {
        q: queryFilter
      }
    })
    .subscribe(p => this._productsSubj.next(p));
  }
}
