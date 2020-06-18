import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'fp-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component implements OnInit {

  @Input() user: User;
  @Output() sendName = new EventEmitter();

  constructor() {
    console.log('constructor: ' + this.user)
   }

  ngOnInit() {
    console.log('ngOnInit: ' + this.user)
  }

  changeName() {
    this.sendName.emit(this.user.name.toUpperCase())
  }

}
