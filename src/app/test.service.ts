import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _counter = 0;

  get counter() {
    return this._counter;
  }

  constructor() { }

  inc() {
    this._counter++;
  }
}
