import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-block',
  template: require('./user.html'),
  providers: [AuthService]
})

export class UserComponent {
  token: string;
  state: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.token = this.authService.getToken();
  }

  onClickLogout(e: Event) {
    e.preventDefault();
    this.token = this.authService.getToken();
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
  }
}
