import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService) {
  }
  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isLoggedIn$.pipe(take(1));
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn$;
  }


}
