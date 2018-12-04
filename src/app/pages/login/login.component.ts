import { LoginService } from './../../core/login.service';
import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  onChange($event: MatSlideToggleChange) {
    if ($event.checked) {
      this.loginService.login();
    } else {
      this.loginService.logout();
    }
  }

  isLogin() {
    return this.loginService.isLogin();
  }
}
