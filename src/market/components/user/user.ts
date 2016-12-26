import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'user-block',
  template: require('./user.html')
})

export class UserComponent {
  token: string;
  state: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isAuth() {
    return !!this.authService.getToken();
  }

  isNotAuth() {
    return !this.authService.getToken();
  }

  onClickLogout(e: Event) {
    e.preventDefault();
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
  }
}
