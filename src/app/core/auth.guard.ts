import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  private checkLogin() {
    if (this.loginService.isLogin()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
