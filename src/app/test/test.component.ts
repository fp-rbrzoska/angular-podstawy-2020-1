import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  testVar: User = {
    age: 67,
    name: 'Alojzy',
    address: {
      city: 'Racibórz',
      street: 'Za winklym 7'
    }
  };
  constructor() { }

  ngOnInit() {
  }

  btnClick(ev) {
    console.log(ev)
  }

  alertNewName(name) {
    alert(name)
  }

}
