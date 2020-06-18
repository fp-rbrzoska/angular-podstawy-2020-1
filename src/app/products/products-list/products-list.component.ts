import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from '../products.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'fp-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  showDescriptions = false;
  products$: Observable<Product[]>;
  constructor(private productService: ProductsService) {
    this.products$ = this.productService.products$;
    this.productService.refreshProducts();
   }

  ngOnInit() {
  }

}
