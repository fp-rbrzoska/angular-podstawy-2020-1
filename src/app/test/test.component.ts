import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { TestService } from '../test.service';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  testobservable$ = of(1,2,3,4,5);
  private _testSubj = new BehaviorSubject<string>('x');
  testObsFromSubj$ = this._testSubj.asObservable();

  testData;

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

    this.testObsFromSubj$.subscribe(dta => this.testData = dta)
    this._testSubj.subscribe(val => console.log(val));
    //this.testobservable$.subscribe(val => console.log(val));
  }
  changeSubj(val) {
    this._testSubj.next(val);
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
