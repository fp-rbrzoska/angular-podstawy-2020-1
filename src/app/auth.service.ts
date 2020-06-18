import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubj = new BehaviorSubject<boolean>(true);
  isLoggedIn$ = this.isLoggedInSubj.asObservable();

  constructor() { }

  logIn() {
    this.isLoggedInSubj.next(true);
  }

  logOut() {
    this.isLoggedInSubj.next(false);
  }
}
