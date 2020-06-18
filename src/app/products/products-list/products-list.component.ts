import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'fp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  showDescriptions = false;
  products: Product[] = [
    { id: '1', name: 'prod1', description: 'prod descr 1', price: 1.99, category: 'cat1' },
    { id: '2', name: 'prod2', description: 'prod descr 2', price: 2.99, category: 'cat2' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
