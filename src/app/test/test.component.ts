import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { TestService } from '../test.service';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  counterValue: number;
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
  constructor(private testService: TestService) {
   }

  ngOnInit() {
  }

  toggleAddress() {
    this.testService.inc();

    this.counterValue = this.testService.counter;
    this.showAddresses = !this.showAddresses;
  }

  btnClick(ev) {
    console.log(ev)
  }

  alertNewName(name) {
    alert(name)
  }

}
