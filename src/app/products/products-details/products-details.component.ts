import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'fp-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit, OnChanges {

  showDescr;
  @Input() product: Product;
  @Input()
  set showDescription(value) {
    this.showDescr = value;
  };
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log(changes)
  }

}
