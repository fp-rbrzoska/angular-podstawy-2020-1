import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe(v => this.isLoggedIn = v);
   }

  ngOnInit() {
  }

  logIn() {
    this.authService.logIn();
  }

  logOut() {
    this.authService.logOut();
  }

}
