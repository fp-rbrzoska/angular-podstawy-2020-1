import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'fp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  showDescriptions = false;
  products: Product[];
  constructor(private productService: ProductsService) {
    this.products = this.productService.getAllProducts()
   }

  ngOnInit() {
  }

}
