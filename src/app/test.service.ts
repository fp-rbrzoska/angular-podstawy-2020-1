import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _counter = 0;

  get counter() {
    return this._counter;
  }

  constructor(private http: HttpClient) { }

  inc() {
    this._counter++;
  }

  getProfile() {
    return this.http.get<{ name: string }>('http://localhost:3000/profile')
  }
}
