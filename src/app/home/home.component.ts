import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fp-home',
  // template: `<div>
  //   home component
  // </div>`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
