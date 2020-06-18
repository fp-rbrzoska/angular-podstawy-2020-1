import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  users: User[] = [
    { age: 17, name: 'Stanisław Żółtek'},
    { age: 30, name: 'Alojzy Jeż', address: { city: 'Bytom', street: 'Hasiok 15'}}
  ];

  showAddresses = false;


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

  toggleAddress() {
    this.showAddresses = !this.showAddresses;
  }

  btnClick(ev) {
    console.log(ev)
  }

  alertNewName(name) {
    alert(name)
  }

}
