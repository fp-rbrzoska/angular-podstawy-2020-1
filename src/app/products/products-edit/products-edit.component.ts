import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fp-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {

  prodId: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.prodId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigateByUrl('/products')
  }

}
