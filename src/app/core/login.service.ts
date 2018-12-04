import { LocalStorageService } from './local-storage.service';
import { Injectable, OnInit } from '@angular/core';

const loginKey = 'login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _login: boolean;

  constructor(private localStorageService: LocalStorageService) {
    this._login = Boolean(this.localStorageService.getItem(loginKey));
  }

  login() {
    this._login = true;
    this.localStorageService.setItem(loginKey, loginKey);
  }

  logout() {
    this._login = false;
    this.localStorageService.removeItem(loginKey);
  }

  isLogin() {
    return this._login;
  }
}
